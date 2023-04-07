require("dotenv").config();
const { writeJSONData } = require("./utils/helper");
let express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Directing to router
const buddyRoute = require("./router/route");
app.use("/buddy", buddyRoute);

app.use("/", (req, res, next) => {
  res.send("this is error");
});

// Port staring 
app.listen(process.env.PORT, () => {
  console.log("Server started at ", process.env.PORT);
  writeJSONData("./cdw_ace23_buddies.json", [], (err) => {
    if (err) console.log(err);
    else console.log("Hi");
  });
});
