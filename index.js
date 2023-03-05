import { ServiceImportJson } from "./util/jsonimport/index.js";
import { JsonToTable, JsonToWorkGroupsTable } from "./util/csvtotable/index.js";
import { JsonToItems } from "./util/json-to-items/index.js";
import { workgroupsList } from "./util/data/data.js";

let groupsContainer = document.getElementById("groups-container");
let indexContainer = document.getElementById("index-container");
let content = document.getElementById("content");
let loadingCircles = document.querySelectorAll(".loading-circle");

//load spinner from html
const parser = new DOMParser();
let response = await fetch("./util/loading-spinner-4/dist/index.html");
let text = await response.text();

loadingCircles.forEach((element) => {
  const spinner = parser
    .parseFromString(text, "text/html")
    .querySelector(".spinner-container");
  element.appendChild(spinner);
});

const json = await ServiceImportJson();
const table = JsonToTable(json);
const items = JsonToItems(json);
const groups = JsonToWorkGroupsTable(workgroupsList);

loadingCircles.forEach((element) => {
  element.remove();
});

indexContainer.appendChild(table);
content.appendChild(items);
groupsContainer.appendChild(groups);
