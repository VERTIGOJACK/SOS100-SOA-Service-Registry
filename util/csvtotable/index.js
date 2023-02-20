//find way to exclude columns
export const JsonToTable = (json) => {
  let columns = json.something;
  let rows = json.something;

  //enclosing table
  let result = "<table>";
  let headers = "<tr>";
  let body = "";

  columns.forEach((element) => {
    headers += "<th>" + element.label + "</th>";
  });
  headers += "</tr>";

  for (let i = 0; i < rows.length; i++) {
    //enclosing row
    body += "<tr>";
    let singlerow = rows[i].c;
    console.log(singlerow);
    singlerow.forEach((element) => {
      body += "<td>";
      body += element.v;
      body += "</td>";
    });
    body += "</tr>";
  }
  result += headers;
  result += body;
  result += "</table>";
  return;
};
