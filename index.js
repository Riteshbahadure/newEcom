const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)
const app = express()

app.use(express.static("dist"))
app.use(express.static("uploads"))
app.use(express.json())
app.use(cors({
    origin: true,
    credentials: true
}))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/admin", require("./routes/Admin.route"))
app.use("/api/order", require("./routes/order.route"))
app.use("/api/msg", require("./routes/Msgs.route"))


app.use("*", async (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
    // res.status(404).json({ message: "Resource Not found" })
})


app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "something went wrong" })
})
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECT")

    app.listen(5000, console.log("SERVER RUNNING"))
})