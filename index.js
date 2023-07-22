const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/routes/index");
const cors = require("cors");

function startServer() {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(cors({
        origin: "http://localhost:3000",
    }))
    app.listen(8080, () => {
        console.log("Server started on port 8080");
        
    })

    app.use("/", router);
}

startServer();