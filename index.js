// FOR DEVELOPERS
METHOD_NUMBER = 1;
PORT = 3000;

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const methodRoute = require(`./routes/storage_method${METHOD_NUMBER}`);
app.use("/", methodRoute);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} - Method ${METHOD_NUMBER}.`)
);
