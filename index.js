import { CsvToTableAsync } from "./util/csvtotable/index.js";

let pageindex = document.getElementById("pageindex");

pageindex.innerHTML = await CsvToTableAsync("./csv/data2.csv", 5);

//then construct items from excel sheet- maybe turn into json object ?
//also maybe add "details" and link anchor to id on page. csv reader is getting real spaghetti now lol

//ok i guess fucking scrap all this and start over with a google sheets and load in a JSON endpoint
//treat json in a function and go banaynay
