import { CsvToTableAsync } from "./util/csvtotable/index.js";
import { ServiceImportJson } from "./util/jsonimport/index.js";

// let pageindex = document.getElementById("pageindex");

// pageindex.innerHTML = await CsvToTableAsync("./csv/data.csv", 5);

const json = await ServiceImportJson();


