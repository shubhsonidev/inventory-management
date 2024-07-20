const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BLOGIFY PRIVATE API DOC",
      version: "1.0.0",
      description: "Blogging application",
    },
  },
  apis: ["./routes/*.js"], // Path to the API docs
};
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
