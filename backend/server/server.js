const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

/* CONNECT MONGODB */
connectDB();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* ROUTES */
app.use("/api/student", require("./routes/studentAuth"));
app.use("/api/admin", require("./routes/adminAuth"));
app.use("/api/issues", require("./routes/issues"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
