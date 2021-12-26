const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require("./config/dataBase");

dotenv.config({ path: "config/config.env" });
connectDataBase();
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is connected on http://localhost:${PORT}`);
});
