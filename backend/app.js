const express = require('express');
const cors = require('cors');
const authRoutes = require("./Routes/apis/authRoutes")
const doctorRoutes = require("./Routes/apis/doctors/doctorsRoutes")
const patientRoutes = require('./Routes/apis/patients/makeAppointment')

const app = express();

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true
  })
);

//Middlewares 
app.use(express.json())

// Health-check routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Healthcare API is running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

//authenticationRoutes
app.use("/",authRoutes);

//doctorRoutes
app.use("/",doctorRoutes)

//patientRoutes
app.use("/",patientRoutes)

module.exports = app;