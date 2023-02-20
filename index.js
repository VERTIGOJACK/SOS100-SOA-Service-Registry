import { ServiceImportJson } from "./util/jsonimport/index.js";
import { JsonToTable } from "./util/csvtotable/index.js";
import { JsonToItems } from "./util/json-to-items/index.js";

let indexContainer = document.getElementById("index-container");
let content = document.getElementById("content");

const json = await ServiceImportJson();
const table = JsonToTable(json);
const items = JsonToItems(json);

console.log(items)

indexContainer.appendChild(table);
content.appendChild(items);
