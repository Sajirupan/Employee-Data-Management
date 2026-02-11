import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

/* ---------------- MIDDLEWARE ---------------- */

// JSON Middleware
app.use(express.json());

// URL Encoded Middleware
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Employee API Running...");
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(()=> console.log("MongoDB Connected"))
  .catch(err => {
    console.error("DB Connection Error:", err.message);
    process.exit(1);
  })

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
