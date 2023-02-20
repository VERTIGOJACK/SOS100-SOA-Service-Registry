//format of json:

// consumerGroupIds: "1,2,3";
// description: "Hanterar information om våra användare, sådant som syns publikt för andra.";
// id: 3;
// ownerGroupId: 1;
// swaggerURL: "https://informatik1.ei.hv.se/Profil/swagger";
// title: "Användarinfo";
// type: "API";
// url: "https://informatik1.ei.hv.se/Profil/api/userinfos";

export const itemsHeaders = [
  "Service",
  "Ägare",
  "Konsumenter",
  "Typ",
  "Länk",
  "Swagger",
];

export const JsonToItems = (json) => {
  const items = document.createElement("section");
  items.setAttribute("id", "services-container");

  for (let i = 0; i < json.length; i++) {
    let row = json[i];
    //make surrounding section
    let section = document.createElement("section");
    section.setAttribute("id", "service" + i);
    section.setAttribute("class", "service");

    //append title
    section.appendChild(CreateElement("h1", row.title + " - " + row.type));

    //create owners and consumers
    section.appendChild(OwnersConsumers(row));

    //create description
    section.appendChild(CreateElement("p", row.description));

    //create links
    let linksSection = document.createElement("section");
    linksSection.setAttribute("class", "link-section");

    linksSection.appendChild(
      CreateLink("Länk till tjänstens GET", row.url, row.url)
    );
    linksSection.appendChild(
      CreateLink("Länk till Swagger", row.swaggerURL, row.swaggerURL)
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
  section.appendChild(element);

  return section;
}
