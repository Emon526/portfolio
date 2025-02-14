document.addEventListener("DOMContentLoaded", function () {
  mapExperienceData();
});

function mapExperienceData() {
  let exp = [
    {
      org: "Fiverr",
      position: "Freelance Flutter Developer",
      duration: "Dec 2022 - Present",
      technologies: [
        "Flutter",
        "Dart",
        "GitHub Actions",
        "Supabase",
        "Firebase",
        "REST APIs",
        "Dart package",
      ],
      details: [
        "Working with flutter_bloc state management, alongside provider to maintain local states and global use cases",
        "Integrated payment gateways into flutter app with REST APIs",
        "Handled local packages to maintain custom components and to maintain API architecture",
        "Maintaining layered architecture for better encapsulation and abstraction of code from Application layer to domain layer and to data layer",
        "Learned GitHub actions for CI/CD",
        "Worked with various env. flavors in flutter app (dev, qa, stage, prod)",
        "Learned concepts like ACL (Access Control List) for maintaining features in live app",
        "Integration of REST APIs, Firebase and local cached concepts for better user experience",
        "Added features in huge code base with scalability in mind, along with other concepts of OOP and design pattern.",
        // "Learned project management tools like Jira and Mural",
        // "Worked in Agile software methodology, worked in sprints and different team structures like Squads.",
        // "Helped in interviews and expanding team of developers.",
        "Worked with layered architecture",
        "Integrated Supabase in flutter app",
        "Used external packages for managing form input concepts - flutter_form_builder",
        "Learned GitHub (Version Controlling) with a team, concepts like maintaining PRs, branches etc.",
        "Improved concepts of reusable components",
        "Deployment on play store",
      ],
    },
    {
      org: "MotherCare",
      position: "Consultant & Lead Mobile Developer",
      duration: "Sep 2022 - April 2023",
      technologies: [
        "Flutter",
        "Dart",
        "App script",
        "Google maps",
        "Firebase",
        "Cloud functions",
        "GitHub Actions",
        "REST APIs",
        "MongoDB",
        "Node.js",
        "Express.js",
      ],
      details: [
        "Developed first BETA version of Mothercare app",
        "Managed MongoDB as source of data into the app to overcome the place of Firebase",
        "Learned and implemented MVC architecture for production level of application",
        "Integrated Google maps, live markers and interaction of users with it",

        "Upgraded the application to complete new UI and UX",
        "Uplifted the mobile apps architecture for better performance and better code structure",
        "Integrated REST and GraphQL structures of APIs for various purposes",
        "Consulted for better UI and UX for new design for both the mobile apps",
        "Handled code-sharing concept as there were two mobile apps involved i.e. Admin and User app",

        "Developed first MVP for android application",
        "Working with provider state management to maintain local states",
        "Upgraded MVP to latest flutter SDK as the MVP was developed in flutter 3.x.x",
        "Currently handling the BETA version for the mobile app using flutter (android/iOS) both",
        "Written cloud functions on firebase to handling some of the backend logic that needs to be separated from mobile application layer",
        "Implemented caching techniques for better UX",
      ],
    },
    {
      org: "GENEX (JV) | BD",
      position:
        "Cross Platform Mobile Application Develeopment Training (Flutter)",
      duration: "Feb 2022 - July 2022",
      technologies: [
        "Flutter",
        "Dart",
        "Google maps",
        "SMS integration",
        "Live locations",
        "Firebase auth",
        "Firebase real-time",
      ],
      details: [
        "Learned real-time location alerts using firebase real-time db",
        "Integrated Google Maps",
        "Firebase authentication via phone number",
        "MVC architecture based application",
        "Learned state management concepts like provider",
      ],
    },
  ];

  for (var i = 0; i < exp.length; i++) {
    var expCard = document.createElement("div");
    expCard.className = "exp-card";

    var expMetaDiv = document.createElement("div");
    expMetaDiv.className = "exp-meta";

    var orgName = document.createElement("h2");
    orgName.className = "heading2 exp-org";
    orgName.innerHTML = exp[i]["org"];

    var position = document.createElement("span");
    position.className = "label exp-position";
    position.innerHTML = exp[i]["position"];

    var session = document.createElement("p");
    session.className = "body2 exp-session";
    session.innerHTML = exp[i]["duration"];

    var technologiesHeading = document.createElement("span");
    technologiesHeading.className = "body2 exp-tech";
    technologiesHeading.innerHTML = "Technologies";

    var technologiesList = document.createElement("ul");
    technologiesList.className = "exp-tech-list";

    for (var k = 0; k < exp[i]["technologies"].length; k++) {
      var techName = document.createElement("li");
      techName.className = "body2 exp-tech-item";
      techName.innerHTML = exp[i]["technologies"][k];
      technologiesList.appendChild(techName);
    }
    expMetaDiv.appendChild(orgName);
    expMetaDiv.appendChild(position);
    expMetaDiv.appendChild(session);
    expMetaDiv.appendChild(technologiesHeading);
    expMetaDiv.appendChild(technologiesList);
    expCard.appendChild(expMetaDiv);

    var detailsList = document.createElement("ul");
    detailsList.className = "exp-detail";

    for (var k = 0; k < exp[i]["details"].length; k++) {
      var detail = document.createElement("li");
      detail.className = "body2 exp-detail-item";
      detail.innerHTML = exp[i]["details"][k];
      detailsList.appendChild(detail);
    }

    expCard.appendChild(detailsList);

    var experiences = document.getElementById("exp");
    experiences.appendChild(expCard);
  }
}
