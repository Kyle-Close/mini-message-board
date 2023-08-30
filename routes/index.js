var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Form" });
});

router.post("/new", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;

  const newMessageObj = {
    text: message,
    user: name,
    added: new Date(),
  };

  messages.push(newMessageObj);
  res.redirect("/");
});

module.exports = router;
