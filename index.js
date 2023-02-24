import { ServiceImportJson } from "./util/jsonimport/index.js";
import { JsonToTable, JsonToWorkGroupsTable } from "./util/csvtotable/index.js";
import { JsonToItems } from "./util/json-to-items/index.js";
import { workgroupsList } from "./util/data/data.js";

let groupsContainer = document.getElementById("groups-container");
let indexContainer = document.getElementById("index-container");
let content = document.getElementById("content");

const json = await ServiceImportJson();
const table = JsonToTable(json);
const items = JsonToItems(json);
const groups = JsonToWorkGroupsTable(workgroupsList);

console.log(items);

indexContainer.appendChild(table);
content.appendChild(items);
groupsContainer.appendChild(groups);
