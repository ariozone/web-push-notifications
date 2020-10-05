const express = require("express")
const app = express()
const webpush = require("web-push")
const cors = require("cors")
const bodyParser = require("body-parser")
const port = app.set("port", process.env.PORT || 3001)
import keys from "./keys.json"
app.use(cors())
app.use(bodyParser.json())
app.get("/", (req, res) => {
  res.status(200).json({ message: "Express is up" })
})
app.listen(port, () => {
  console.log("Server is running on port: ", port)
})

webpush.setVapidDetails(
  "mailto:ario@mycarauction.com",
  keys["Public Key"],
  keys["Public Key"]
)
app.post("/subscribe", (req, res) => {
  const { subscription, title, message } = req.body
  const payload = JSON.stringify({ title, message })

  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error("err", err))
  res.status(200).json({ success: true })
})
