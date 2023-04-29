const express = require("express")
const app = express();

app.use(express.static('public'))


app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(22221, () => {
    console.log("Run to server ...")
})