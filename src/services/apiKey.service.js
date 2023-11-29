const apiKeyModel = require("../models/apiKey.model");
const crypto = require("node:crypto");

const findApiKeyById = async (key) => {
  // const newKey = await apiKeyModel
  //   .create({
  //     key: crypto.randomBytes(64).toString("hex"),
  //     permissions: ["0000"],
  //   })
  //   .lean();
  // console.log(newKey);
  const objKey = await apiKeyModel.findOne({ key, status: true }).lean();
  console.log(objKey);
  return objKey;
};

module.exports = {
  findApiKeyById,
};
