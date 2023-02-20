import * as csv from "../../csv-main/index.js";

export const CsvToTableAsync = async (filePath, columns) => {
  const file = await fetch(filePath);
  const data = await file.text();
  const array = csv.parse(data);
  console.log(array);
  const html = CommaDelimitedArrayToTable(array, columns);
  return html;
};
//börja här imorgon
export const CsvToDetailedItemAsync = async (filePath) => {
  const file = await fetch(filePath);
  const data = await file.text();
  const array = csv.parse(data);
  console.log(array);
  const html = CommaDelimitedArrayToItem(array);
  return html;
};

const CommaDelimitedArrayToTable = (array, columns) => {
  //enclosing table
  let result = "<table>";

  for (let i = 0; i < array.length; i++) {
    //enclosing row
    result += "<tr>";
    let data = array[i][0].split(";");

    //handle each element in a row
    let columncounter = 0;
    data.forEach((element) => {
      //switch special char for comma
      let commasplit = element.split("%2c");
      element = commasplit.join(",");
      if (columncounter < columns + 1) {
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
        //check if details
        if (columncounter == columns && i != 0) {
          result += "<a href=#service" + i;
        }
        //write content
        if (columncounter != columns || i == 0) {
          result += element;
        }

        if (
          checkhttp == "http" ||
          checkhttp == "https" ||
          (columncounter == columns && i != 0)
        ) {
          result += ">Länk</a>";
        }
        if (i == 0) {
          result += "</th>";
        } else {
          result += "</td>";
        }
        columncounter++;
      }
    });
    result += "</tr>";
  }
  result += "</table>";
  return result;
};

const CommaDelimitedArrayToItem = (array, columns) => {

  for (let i = 0; i < array.length; i++) {
    //enclosing row
    result += "<section id=service"+i+">";
    let data = array[i][0].split(";");

    //handle each element in a row
    let columncounter = 0;
    data.forEach((element) => {
      //switch special char for comma
      let commasplit = element.split("%2c");
      element = commasplit.join(",");
      if (columncounter < columns + 1) {
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
        //check if details
        if (columncounter == columns && i != 0) {
          result += "<a href=#service" + i;
        }
        //write content
        if (columncounter != columns || i == 0) {
          result += element;
        }

        if (
          checkhttp == "http" ||
          checkhttp == "https" ||
          (columncounter == columns && i != 0)
        ) {
          result += ">Länk</a>";
        }
        if (i == 0) {
          result += "</th>";
        } else {
          result += "</td>";
        }
        columncounter++;
      }
    });
    result += "</tr>";
  }
  result += "</section>";
  return result;
};
