"use strict";
const path = require("path");

module.exports.getConfig = () => {
  const config = {
    MODE: "Development",
    PORT: process.env.PORT || 5000,
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET: process.env.JWT_SECRET || "4L3M4RN3RY",
  };

  // Modify for Production
  if (process.env.NODE_ENV === "production") {
    config.MODE = "Production";
  }

  return config;
};
