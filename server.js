const express = require("express");
const port = 5000;

const app = express();

const ideas = [
    {
        id: 1,
    }]

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/api/ideas", (req, res) => {
  res.json({ message: "About Us" });
});

app.get("/api/ideas/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));
  if (!idea) {
    return res
      .status(404)
      .json({
        sucess: false,
        message: `No idea with the id of ${req.params.id}`,
      });
  }
  res.json({ message: "About Us" });
});

app.listen(port, console.log(`Server is running on port ${port}`));
