require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./Routes/apis/authRoutes");
const doctorsRoutes = require("./Routes/apis/doctors/doctorsRoutes");
const patientAppointmentRoutes = require("./Routes/apis/patients/makeAppointment");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
]
  .filter(Boolean)
  .map((origin) => origin.replace(/\/$/, ""));

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      const normalizedOrigin = origin.replace(/\/$/, "");

      const isAllowed =
        allowedOrigins.includes(normalizedOrigin) ||
        normalizedOrigin.endsWith(".vercel.app");

      if (isAllowed) {
        return callback(null, true);
      }

      console.error("Blocked CORS origin:", normalizedOrigin);
      return callback(null, false);
    },

    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    console.log(
      `${req.method} ${req.originalUrl} -> ${res.statusCode} ${
        Date.now() - start
      }ms`
    );
  });

  next();
});

// Health routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Healthcare API is running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
  });
});

// Existing application routes
app.use("/", authRoutes);
app.use("/", doctorsRoutes);
app.use("/", patientAppointmentRoutes);

// JSON 404 response
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error("Unhandled backend error:", error);

  res.status(error.status || 500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : error.message,
  });
});

module.exports = app;