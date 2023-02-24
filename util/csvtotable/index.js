//format of json:

// consumerGroupIds: "1,2,3";
// description: "Hanterar information om våra användare, sådant som syns publikt för andra.";
// id: 3;
// ownerGroupId: 1;
// swaggerURL: "https://informatik1.ei.hv.se/Profil/swagger";
// title: "Användarinfo";
// type: "API";
// url: "https://informatik1.ei.hv.se/Profil/api/userinfos";

export const tableHeaders = [
  "Service",
  "Typ",
  "Ägare",
  "Konsumenter",
  "Länk",
  "Swagger",
];

export const JsonToTable = (json) => {
  //create table and header row
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  //fill header row
  tableHeaders.forEach((element) => {
    let header = document.createElement("th");
    let node = document.createTextNode(element);
    header.appendChild(node);
    headerRow.appendChild(header);
  });

  //append header row to table
  table.appendChild(headerRow);

  //create and append data to table
  for (let i = 0; i < json.length; i++) {
    let row = document.createElement("tr");

    row.appendChild(TableDescriptionLink(json[i].title, i));
    row.appendChild(TableData(json[i].type));
    row.appendChild(TableData(json[i].ownerGroupId));
    row.appendChild(TableData(json[i].consumerGroupIds));
    row.appendChild(TableDataLink(json[i].url));
    row.appendChild(TableDataLink(json[i].swaggerURL));
    table.appendChild(row);
  }
  //return table
  return table;
};

function TableData(input) {
  let data = document.createElement("td");
  let item = document.createTextNode(input);
  data.appendChild(item);
  return data;
}

function TableDataLink(input) {
  let data = document.createElement("td");
  let anchor = document.createElement("a");
  anchor.setAttribute("href", input);
  let item = document.createTextNode("Länk");
  anchor.appendChild(item);
  data.appendChild(anchor);
  return data;
}

function TableDescriptionLink(input, serviceId) {
  let data = document.createElement("td");
  let anchor = document.createElement("a");
  anchor.setAttribute("href", "#service" + serviceId);
  let item = document.createTextNode(input);
  anchor.appendChild(item);
  data.appendChild(anchor);
  return data;
}
