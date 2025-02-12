document.addEventListener("DOMContentLoaded", function () {
  mapProjectsData();
});

function mapProjectsData() {
  let projects = [
    // {
    //   title: "The Holy Qur'an",
    //   image: "images/projects/quran.png",
    //   type: "Open Source",
    //   labels: [
    //     {
    //       title: "Play",
    //       link: "",
    //     },
    //     {
    //       title: "Web",
    //       link: "https://emon526.github.io/quran/",
    //     },
    //     {
    //       title: "GitHub",
    //       link: "",
    //     },
    //   ],
    //   supportedPlatform: [
    //     {
    //       name: "Flutter",
    //       icon: "images/tech/flutter.svg",
    //     },
    //     {
    //       name: "Web",
    //       icon: "https://emon526.github.io/quran/",
    //     },
    //   ],
    // },
    // {
    //   title: "Devfolio",
    //   image: "images/projects/devfolio.png",
    //   type: "Open Source",
    //   labels: [
    //     {
    //       title: "Play",
    //       link: "https://play.google.com/store/apps/details?id=com.hmz.folio",
    //     },
    //     {
    //       title: "Web",
    //       link: "http://emon526.github.io/devfolio",
    //     },
    //     {
    //       title: "GitHub",
    //       link: "https://github.com/emon526/devfolio",
    //     },
    //   ],
    // },
    // {
    //   title: "MotherCare",
    //   image: "images/projects/storius.png",
    //   type: "Product",
    //   labels: [
    //     {
    //       title: "App",
    //       link: "https://apps.apple.com/us/app/id1666697736",
    //     },
    //     {
    //       title: "Play",
    //       link: "https://play.google.com/store/apps/details?id=com.ejaapp.rider",
    //     },
    //     {
    //       title: "Web",
    //       link: "https://storiusapp.com/",
    //     },
    //   ],
    // },

    // {
    //   title: "Awesome Snackbar Content",
    //   image: "images/projects/snackbar.png",
    //   type: "Open Source",
    //   labels: [
    //     {
    //       title: "GitHub",
    //       link: "https://github.com/emon526/awesome_snackbar_content",
    //     },
    //     {
    //       title: "Package",
    //       link: "https://pub.dev/packages/awesome_snackbar_content",
    //     },
    //   ],
    // },
    {
      title: "Expense Planner",
      image: "images/projects/expense_planner/expense_planner.png",
      gif: "images/projects/expense_planner/expense_planner.gif",
      type: "Open Source",
      labels: [
        {
          title: "App",
          link: "https://github.com/emon526/Expense-Planner/releases/latest",
        },
        {
          title: "Play",
          link: "https://github.com/emon526/Expense-Planner/releases/latest",
        },
        {
          title: "GitHub",
          link: "https://github.com/emon526/Expense-Planner",
        },
      ],
    },
    {
      title: "Mother Care",
      image: "images/projects/mother_care/mother_care.png",
      gif: "images/projects/mother_care/mother_care.gif",
      type: "Open Source",
      labels: [
        {
          title: "App",
          link: "https://github.com/emon526/Mother-Care-Flutter/releases/latest",
        },
        {
          title: "Play",
          link: "https://github.com/emon526/Mother-Care-Flutter/releases/latest",
        },
        {
          title: "GitHub",
          link: "https://github.com/emon526/Mother-Care-Flutter",
        },
      ],
    },
    {
      title: "Pass Vault",
      image: "images/projects/pass_vault/pass_vault.png",
      gif: "images/projects/pass_vault/pass_vault.gif",
      type: "Open Source",
      labels: [
        {
          title: "App",
          link: "https://github.com/emon526/Flutter_PassVault/releases/latest",
        },
        {
          title: "Play",
          link: "https://github.com/emon526/Flutter_PassVault/releases/latest",
        },
        {
          title: "GitHub",
          link: "https://github.com/emon526/Flutter_PassVault",
        },
      ],
      supportedPlatform: [
        {
          name: "Flutter",
          icon: "images/tech/flutter.svg",
        },
        {
          title: "App",
          link: "https://github.com/emon526/Flutter_PassVault/releases/latest",
        },
        {
          title: "Play",
          link: "https://github.com/emon526/Flutter_PassVault/releases/latest",
        },
      ],
    },
  ];

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var title = project.title;
    var type = project.type;
    var image = project.image;
    var gif = project.gif; // Added to fetch GIF URL

    var card = document.createElement("div");
    card.className = "project-card";

    var imageDiv = document.createElement("div");
    imageDiv.className = "p-image";

    var projectLabel = document.createElement("div");
    projectLabel.className = "label p-type";
    projectLabel.innerHTML = type;

    var projectImg = document.createElement("img");
    projectImg.className = "p-image-bg";
    projectImg.src = image;
    projectImg.alt = title;

    var projectGif = document.createElement("img");
    projectGif.className = "p-image-gif";
    projectGif.src = gif; // Set the GIF source
    projectGif.alt = title;
    projectGif.style.opacity = "0"; // Initially hide the GIF

    imageDiv.appendChild(projectLabel);
    imageDiv.appendChild(projectImg);
    imageDiv.appendChild(projectGif); // Append the GIF image to the imageDiv

    var projectName = document.createElement("p");
    projectName.className = "body1 p-title";
    projectName.innerHTML = title;

    var labels = document.createElement("div");
    labels.className = "p-labels";

    for (var j = 0; j < project.labels.length; j++) {
      var title = project.labels[j]["title"];
      var link = project.labels[j]["link"];

      var label = document.createElement("a");
      label.className = "p-label";
      var labelIcon = document.createElement("i");

      if (title == "App") {
        labelIcon.className = "p-label-icon fa-brands fa-apple";
      } else if (title == "Play") {
        labelIcon.className = "p-label-icon fa-brands fa-android";
      } else if (title == "Web") {
        labelIcon.className = "p-label-icon fa-solid fa-globe";
      } else if (title == "GitHub") {
        labelIcon.className = "p-label-icon fa-brands fa-github";
      } else if (title == "Package") {
        labelIcon.className = "p-label-icon material-icons";
        labelIcon.innerHTML = "widgets";
        labelIcon.style.fontSize = "16px";
      }

      var labelText = document.createElement("span");
      labelText.className = "label p-label-text";
      labelText.innerHTML = title;

      label.href = link;
      label.target = "_blank";

      label.appendChild(labelIcon);
      label.appendChild(labelText);

      labels.appendChild(label);
    }

    card.appendChild(imageDiv);
    card.appendChild(projectName);
    card.appendChild(labels);

    // Add hover event listeners
    card.addEventListener("mouseenter", function () {
      // Hide the static image and show the GIF of the hovered card
      var projectImg = this.querySelector(".p-image-bg");
      var projectGif = this.querySelector(".p-image-gif");

      // Set the opacity of the image and gif
      projectImg.style.opacity = "0"; // Hide the static image
      projectGif.style.opacity = "1"; // Show the GIF
    });

    card.addEventListener("mouseleave", function () {
      var projectImg = this.querySelector(".p-image-bg");
      var projectGif = this.querySelector(".p-image-gif");

      // Reset the opacity when mouse leaves
      projectImg.style.opacity = "1"; // Show the static image
      projectGif.style.opacity = "0"; // Hide the GIF
    });

    var projectsDiv = document.getElementById("projects");
    projectsDiv.appendChild(card);
  }
}
