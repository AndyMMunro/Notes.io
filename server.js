var express = require("express");
const apiRoutes = require("./routes/apiroutes")
const htmlRoutes = require("./routes/htmlroutes")
// const {
//     v4: uuidv4
// } = require('uuid');
// uuidv4();

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static("develop/public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});