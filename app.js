const express = require("express");
const db = require("./conn");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));

app.get("/", (req, res) => {
res.render("index");
});

app.post("/inventory", (req, res) => {
  const { Product_Name, Price, Quantity } = req.body;
  const insert = `INSERT INTO invento VALUES ('0', '${Product_Name}', '${Price}', '${Quantity}')`;

  db.query(insert, (err) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).send("Inventory save failed.");
    }

    res.send('<script>alert("Inventory Saved!"); location.href = "/";</script>');
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});