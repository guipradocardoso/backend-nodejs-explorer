const { Router } = require("express");

const userRouters = Router();



userRouters.post("/", (request, response) => {
   const { name, email, password} = request.body;

   response.json({ name, email, password});

})

module.exports = userRouters;
