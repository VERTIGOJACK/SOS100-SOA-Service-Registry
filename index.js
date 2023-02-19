import { CsvToTableAsync } from "./util/csvtotable/index.js";

let pageindex = document.getElementById("pageindex");

pageindex.innerHTML = await CsvToTableAsync("./csv/data.csv", 5);
