const express = require("express");
const app = express();
const PORT = 3000;

/* Enrutadores */
app.use(express.static("public"));
const mainRouter = require("./routers/main");

/* Rutas */
app.use("/", mainRouter);

app.listen(PORT, () => {
      console.log("Servidor funcionando");
});
