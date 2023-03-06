//format of json:

import { workgroupsList } from "../data/data.js";

// consumerGroupIds: "1,2,3";
// description: "Hanterar information om våra användare, sådant som syns publikt för andra.";
// id: 3;
// ownerGroupId: 1;
// swaggerURL: "https://informatik1.ei.hv.se/Profil/swagger";
// title: "Användarinfo";
// type: "API";
// url: "https://informatik1.ei.hv.se/Profil/api/userinfos";

export const JsonToItems = (json) => {
  const items = document.createElement("section");
  items.setAttribute("id", "services-container");

  for (let i = 0; i < json.length; i++) {
    let row = json[i];
    //make surrounding section
    let section = document.createElement("section");
    section.setAttribute("id", "service" + i);
    section.setAttribute("class", "service");

    let titleSection = document.createElement("section");
    titleSection.setAttribute("class", "title-section");
    //append title
    titleSection.appendChild(CreateElement("h1", row.title + " - " + row.type));

    section.appendChild(titleSection);

    let dependencySection = document.createElement("section");
    dependencySection.setAttribute("class", "dependency-section");
    //create owners and consumers
    dependencySection.appendChild(OwnersConsumers(row));

    section.appendChild(dependencySection);

    //create description
    section.appendChild(CreateElement("p", row.description));

    //create links
    let linksSection = document.createElement("section");
    linksSection.setAttribute("class", "link-section");

    linksSection.appendChild(
      CreateLink("Länk till tjänstens GET", "Service URL", row.url)
    );
    linksSection.appendChild(
      CreateLink("Länk till Swagger", "Swagger URL", row.swaggerURL)
    );

    section.appendChild(linksSection);

    items.appendChild(section);
  }

  return items;
};

function CreateElement(elementType, innertext) {
  let element = document.createElement(elementType);
  let text = document.createTextNode(innertext);
  element.appendChild(text);

  return element;
}

function OwnersConsumers(row) {
  //make owners and consumers section
  let ownerConsumers = document.createElement("section");
  ownerConsumers.setAttribute("class", "owner-consumers");

  //make owner container
  let owner = document.createElement("section");
  owner.setAttribute("class", "owner");
  //append to owner
  owner.appendChild(CreateElement("h2", "Ägare"));
  owner.appendChild(CreateElement("p", row.ownerGroupId));
  //append to container
  ownerConsumers.appendChild(owner);

  //make and append tooltip
  let tooltip = GetMembersToolTip(row.ownerGroupId);
  ownerConsumers.appendChild(tooltip);

  //split consumers by comma
  let consumerArray = row.consumerGroupIds.split(",");

  //loop consumers
  consumerArray.forEach((element) => {
    //make new consumers container
    let consumer = document.createElement("section");
    consumer.setAttribute("class", "consumer");
    //append to consumers
    consumer.appendChild(CreateElement("h2", "Kund"));
    consumer.appendChild(CreateElement("p", element));
    //append to container
    ownerConsumers.appendChild(consumer);

    //make and append tooltip
    tooltip = GetMembersToolTip(element);
    ownerConsumers.appendChild(tooltip);
  });
  return ownerConsumers;
}

function CreateLink(title, clickText, url) {
  let section = document.createElement("section");
  section.setAttribute("class", "link-box");

  let element = CreateElement("h3", title);
  section.appendChild(element);

  element = CreateElement("a", clickText);
  element.setAttribute("href", url);
  element.setAttribute("target", "_blank");
  section.appendChild(element);

  return section;
}

function GetMembersToolTip(id) {
  let membersInfo;
  let responsibilityInfo;

  //get approproate list of members
  for (let i = 0; i < workgroupsList.length; i++) {
    if (workgroupsList[i].Gruppnummer == "Grupp " + id) {
      membersInfo = workgroupsList[i].Medlemmar;
      responsibilityInfo = workgroupsList[i].Ansvar;
    }
  }

  //make new span
  let tooltip = document.createElement("span");
  tooltip.appendChild(CreateElement("h1", "Medlemmar"));
  tooltip.appendChild(CreateElement("p", membersInfo));
  tooltip.appendChild(CreateElement("h1", "Ansvar"));
  tooltip.appendChild(CreateElement("p", responsibilityInfo));

  //append to container
  return tooltip;
}
