import express from "express";
const app = express();
app.get("/", function (req, res) {
  res.send("Hello Ada!\n");
});
app.listen(3000, () => {
console.log(" Serveur lancé : http://localhost:3000");
});