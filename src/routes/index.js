const  { Router } = require("express");

const userRouters = require("./user.routes");

const routes = Router();

routes.use("/users", userRouters);

module.exports = routes;
