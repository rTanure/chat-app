const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const userRoute = require("./Routes/userRoute")

const app = express()
require("dotenv").config()

app.use(express.json())
app.use(cors())

app.use("/api/users", userRoute)

app.get("/", (req, res) => {
  res.send("Welcome to chat-app API")
})

const PORT = process.env.PORT || 5000
const URI = process.env.ATLAS_URI

app.listen(PORT, ()=>{
  console.log(`Server running on port: ${PORT}`)
})

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connection established"))
.catch((error) => console.log("MongoDB connection failed: ", error.message))