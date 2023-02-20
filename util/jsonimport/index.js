const url = "https://informatik3.ei.hv.se/FriskMonitoringAPI/api/services";

const fakejsonstring =
  '[{"id":3,"consumerGroupIds":"1,2,3","ownerGroupId":1,"title":"Användarinfo","description":"Hanterar information om våra användare, sådant som syns publikt för andra.","type":"API","url":"https://informatik1.ei.hv.se/Profil/api/userinfos","swaggerURL":"https://informatik1.ei.hv.se/Profil/swagger"},{"id":4,"consumerGroupIds":"1,2,3","ownerGroupId":5,"title":"Kontotjänst","description":"Hanterar och lagrar användares konton.","type":"API","url":"https://informatik5.ei.hv.se/FriskAPI/Users","swaggerURL":"https://informatik5.ei.hv.se/FriskAPI/swagger/"},{"id":5,"consumerGroupIds":"1,2,3","ownerGroupId":2,"title":"Eventhantering","description":"Hanterar skapandet av event och lagrar information.","type":"API","url":"https://informatik2.ei.hv.se/eventmanagement/api/events","swaggerURL":"https://informatik2.ei.hv.se/eventmanagement/swagger"}]';

const fakejson = JSON.parse(fakejsonstring);

const test = true;

export async function ServiceImportJson() {
  if (test != true) {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    return json;
  } else {
    const json = fakejson;
    console.log(json);
    return json;
  }
}
