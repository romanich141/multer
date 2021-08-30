const express = require("express");
const path = require("path");
const router = require("./routes");

const app = express();
const PORT = 5050;

app.use('/uploads', express.static(path.join(__dirname, "uploads")))
app.use(express.json())
app.use(router);

app.listen(PORT, () => console.log(`server started in port ${ PORT }...`))