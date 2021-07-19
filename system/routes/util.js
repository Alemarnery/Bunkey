const fs = require("fs");
const path = require("path");
const pluralize = require("pluralize");

pluralize.addUncountableRule("auth");

module.exports.setApiRoutes = (router) => {
  const routesPath = path.resolve(`${__dirname}/../../src/routes`);
  const PATHS = fs.readdirSync(routesPath);
  const moduleMapper = [];

  console.log("✔ Mapping routes");

  PATHS.forEach((module) => {
    if (module !== "index.js") {
      const name = module.split(".")[0];

      router.use(
        `/${pluralize.plural(name)}`,
        require(path.resolve(routesPath, module))
      );

      moduleMapper.push({
        Module: name,
        Route: `/${pluralize.plural(name)}`,
      });
    }
  });

  console.table(moduleMapper);
};
