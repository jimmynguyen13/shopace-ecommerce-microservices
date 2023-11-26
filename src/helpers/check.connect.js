"use strict";

const { log } = require("console");
const { default: mongoose } = require("mongoose");
const os = require("os");
const process = require("process");

const _SECOND = 5000;
// count connection
const countConnection = () => {
  const numConnection = mongoose.connect.length;
  console.log(`Number of db connection: ${numConnection}`);
};

// check overload
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connect.length;
    const numCores = os.cpus().length;
    const memUsage = process.memoryUsage().rss;
    // Assume max number of connections based on number of cores
    const maxConnection = numCores * 5;

    console.log(`Active connections: ${numConnection}`);
    console.log(`Memory usage: ${memUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnection) {
      console.log(`Alert:: DB Connection is overload`);
    }
  }, _SECOND); // Monitor every 5s
};

module.exports = {
  countConnection,
  checkOverload,
};
