const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  // express sẽ hiều đối số thứ 1 là tuyến đường; đối số thứ 2 là cấu hình các tuyến con cho news

  app.use("/courses", coursesRouter);

  app.use("/", siteRouter);
}

module.exports = route;
