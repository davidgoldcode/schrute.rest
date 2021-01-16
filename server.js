const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const quotes = require("./quotes.json");

const server = express();

server.use(helmet());
server.use(
  cors({
    origin: "*",
    methods: "GET",
    allowedHeaders: "Content-Type",
  })
);

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

server.get("/api", (req, res) => {
  const quote = getRandomQuote();
  if (quote) {
    res.status(200).json({ quote });
  } else {
    res.status(500).error("Something went wrong ☹️");
  }
});

module.exports = server;
