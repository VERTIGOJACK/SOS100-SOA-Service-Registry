import * as csv from "../../csv-main/index.js";

export const CsvToTableAsync = async (filePath) => {
  const file = await fetch(filePath);
  const data = await file.text();
  const array = csv.parse(data);
  console.log(array);
  const html = CommaDelimitedArrayToTable(array);
  return html;
};

const CommaDelimitedArrayToTable = (array) => {
  //enclosing table
  let result = "<table>";

  for (let i = 0; i < array.length; i++) {
    //enclosing row
    result += "<tr>";
    let data = array[i][0].split(";");

    //handle each element in a row
    data.forEach((element) => {
      if (i == 0) {
        result += "<th>";
      } else {
        result += "<td>";
      }
      //check if link
      let checkhttp = element.split(":")[0];
      if (checkhttp == "http" || checkhttp == "https") {
        result += "<a href=";
      }
      //write content
      result += element;
      if (checkhttp == "http" || checkhttp == "https") {
        result += ">Länk</a>";
      }
      if (i == 0) {
        result += "</th>";
      } else {
        result += "</td>";
      }
    });
    result += "</tr>";
  }
  result += "</table>";
  return result;
};
