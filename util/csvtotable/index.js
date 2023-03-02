//format of json:
import { tableServiceHeaders } from "../data/data.js";
import { tableWorkgroupsHeaders } from "../data/data.js";
// consumerGroupIds: "1,2,3";
// description: "Hanterar information om våra användare, sådant som syns publikt för andra.";
// id: 3;
// ownerGroupId: 1;
// swaggerURL: "https://informatik1.ei.hv.se/Profil/swagger";
// title: "Användarinfo";
// type: "API";
// url: "https://informatik1.ei.hv.se/Profil/api/userinfos";

export const JsonToTable = (json) => {
  const tableHeaders = tableServiceHeaders;
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

    row.appendChild(TableDescriptionLink(json[i].title, i, "service"));
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

export const JsonToWorkGroupsTable = (json) => {
  const tableHeaders = tableWorkgroupsHeaders;
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
    row.appendChild(TableData(json[i].Gruppnummer));
    row.appendChild(TableData(json[i].Medlemmar));
    row.appendChild(TableData(json[i].Ansvar));
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
  anchor.setAttribute("target", "_blank");
  let item = document.createTextNode("Länk");

  anchor.appendChild(item);
  data.appendChild(anchor);
  return data;
}

function TableDescriptionLink(input, serviceId, prefix) {
  let data = document.createElement("td");
  let anchor = document.createElement("a");
  anchor.setAttribute("href", "#" + prefix + serviceId);
  let item = document.createTextNode(input);
  anchor.appendChild(item);
  data.appendChild(anchor);
  return data;
}
