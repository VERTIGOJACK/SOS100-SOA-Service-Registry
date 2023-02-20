import { ServiceImportJson, GetColumns, GetRows } from "../jsonimport/index.js";

export const JsonToTable = async () => {
  const json = await ServiceImportJson();
  const columns = await GetColumns(json);
  const rows = await GetRows(json);
  const html = JsonColumnsRowsToTable(columns, rows);
  return html;
};

//find way to exclude columns
const JsonColumnsRowsToTable = (columns, rows) => {
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

  //   //handle each element in a row
  //   let columncounter = 0;
  //   data.forEach((element) => {
  //     //switch special char for comma
  //     let commasplit = element.split("%2c");
  //     element = commasplit.join(",");
  //     if (columncounter < columns) {
  //       if (i == 0) {
  //         result += "<th>";
  //       } else {
  //         result += "<td>";
  //       }
  //       //check if link
  //       let checkhttp = element.split(":")[0];
  //       if (checkhttp == "http" || checkhttp == "https") {
  //         result += "<a href=";
  //       }
  //       //write content
  //       result += element;
  //       if (checkhttp == "http" || checkhttp == "https") {
  //         result += ">Länk</a>";
  //       }
  //       if (i == 0) {
  //         result += "</th>";
  //       } else {
  //         result += "</td>";
  //       }
  //       columncounter++;
  //     }
  //   });
  //   result += "</tr>";
  // }
  result += headers;
  result += body;
  result += "</table>";
  return result;
};
