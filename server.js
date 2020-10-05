const express = require("express")
const app = express()
const webpush = require("web-push")
const cors = require("cors")
const bodyParser = require("body-parser")
const port = app.set("port", process.env.PORT || 3001)
app.use(cors())
app.use(bodyParser.json())
app.get("/", (req, res) => {
  res.status(200).json({ message: "Express is up" })
})
app.listen(port, () => {
  console.log("Server is running on port: ", port)
})
