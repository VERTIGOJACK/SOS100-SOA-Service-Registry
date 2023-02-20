const url =
  "https://docs.google.com/spreadsheets/d/1IzOsbAKwTb3imgaLeHYfz9t6NZkLR0ytJ-of217xGBg/gviz/tq?tqx=out:json&tq&gid=551431299";
const googleprefix = "/*O_o*/google.visualization.Query.setResponse(";
const googlesuffix = ");";

export async function ServiceImportJson() {
  const data = await fetch(url);
  const text = await data.text();
  let preparedtext = text.substring(googleprefix.length + 1);
  preparedtext = preparedtext.split(googlesuffix)[0];
  const json = JSON.parse(preparedtext);
  console.log(json);
  return json;
}

export async function GetColumns(json) {
  return json.table.cols;
}
export async function GetRows(json) {
  return json.table.rows;
}
