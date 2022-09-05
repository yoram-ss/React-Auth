const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/login", (req, res) => {
  const { username, password } = req.body;
  if (username !== "yoram" || password !== "1234") {
    return res.json({ message: "Not authorized!", status: 401 });
  }
  res.json({
    token: "thisistoken123",
  });
});

app.listen(8080, (req, res) =>
  console.log("listening on port http://localhost:8080/login...")
);
