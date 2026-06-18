require("dotenv").config();

const express = require("express");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-three-flax-uhyb5l93wc.vercel.app",
    ],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.send("Portfolio API Running 🚀");
});

// API Routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});