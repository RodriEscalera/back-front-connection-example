const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require("./routes/users");
const cors = require("cors");

app.use(cors("http://localhost:3000"));
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", routes);
app.listen(3001, () => {
  console.log("Escuchando en el puerto 3001 🚀");
});
