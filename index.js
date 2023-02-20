import { JsonToTable } from "./util/csvtotable/index.js";

let pageindex = document.getElementById("pageindex");

pageindex.innerHTML = await JsonToTable();
