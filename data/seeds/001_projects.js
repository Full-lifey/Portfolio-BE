exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          title: "Secret Family Recipes",
          preview:
            "A web app for securely storing family recipes for generations. I built the interactive landing page in four days using HTML, CSS, and Javascript.",
          imageURL: "https://i.imgur.com/ldZkAbY.png",
          deployment: "https://secret-family-recipes-marketing.netlify.com/",
          repo: "https://github.com/family-recipes-buildweek/Joel-Perez-UI",
          description:
            "Secret Family Recipes is a web application built to securely store, access and pass down family recipes for generations. <br> <br> I was given four days to design and build the marketing/landing page for the app. I began looking for inspiration and quickly came to the conclusion that the biggest impact design comes from great photographs. That decision led me to design a carousel with a moving call to action to drive new account creation."
        },
        {
          title: "Tabless Thursday",
          preview:
            "A web application built to save tabs in order to reduce CPU and RAM usage by allowing users to save and close open tabs in browsers. Tabless is a single-page application built in ReactJS with Redux.",
          imageURL: "https://i.postimg.cc/L8DGXhN8/Tabless.png",
          deployment: "https://tabless-thursday-fe.netlify.com/",
          repo:
            "https://github.com/tabless-thursday-6-27-2019/tabless-thursday-frontend",
          description:
            "A web application built to save tabs in order to reduce CPU and RAM usage by allowing users to save and close open tabs in browsers. Tabless is a single-page application built in ReactJS with Redux."
        },
        {
          title: "Miracle Messages Map",
          preview:
            "A web application built to connect lost and runaway homeless people to their families looking for them. I implemented a RESTful API built using NodeJS with a PostgreSQL database.",
          imageURL: "https://i.postimg.cc/YSxvPVrq/MMM.png",
          deployment: "https://mmm-api-docs.netlify.com/",
          repo: "https://github.com/miracle-mm/back-end",
          description:
            "A web application built to connect lost and runaway homeless people to their families looking for them. I implemented a RESTful API built using NodeJS with a PostgreSQL database."
        },
        {
          title: "Future Hope School",
          preview:
            "A Web application to connect underserved students in third world countries to native english speaking volunteers. This app was build in ReactJS utilizing Google Firestore for the back-end.",
          imageURL: "https://i.imgur.com/Xw1uf5j.png",
          deployment: "https://www.futurehopeschool.com",
          repo: "https://github.com/Lambda-School-Labs/future-hope-client",
          demo:
            "https://drive.google.com/open?id=1LyobIjLNhJFhyxLnQar8wPdlDjcYkEd0",
          description:
            "A Web application to connect underserved students in third world countries to native english speaking volunteers. This app was build in ReactJS utilizing Google Firestore for the back-end."
        }
      ]);
    });
};
