const express = require("express");
const authRoute = require("./authRoute");
const campusRoute = require("./campusRoute");
const treeRoute = require("./treeRoute");
const { path } = require("../app");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/tree",
    route: treeRoute,
  },
  {
    path: "/campus",
    route: campusRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
