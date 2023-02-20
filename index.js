import { ServiceImportJson } from "./util/jsonimport/index.js";
import { JsonToTable } from "./util/csvtotable/index.js";

let pageindex = document.getElementById("pageindex");

const json = await ServiceImportJson();
const table = await JsonToTable(json);
pageindex.innerHTML = table;
