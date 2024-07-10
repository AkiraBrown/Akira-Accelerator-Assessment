// DEPENDENCIES
const app = require("./app");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT || 3001;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
