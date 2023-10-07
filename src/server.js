const express = require('express');

const routes = require("./routes");


const app = express();
app.use(express.json());

app.use(routes);

app.post("/users", (request, response) => {
   const { name, email, password} = request.body;

   response.json({ name, email, password});

})


const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running in Port ${PORT}`));
