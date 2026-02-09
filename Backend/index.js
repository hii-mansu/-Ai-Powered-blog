import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import routerComment from "./routes/commentRoutes.js";
import routerBlog from "./routes/blogRoutes.js";
import routerAdmin from "./routes/adminRoutes.js";
import initSiteSettings from "./config/initSiteSettings.js";
import initAdmin from "./config/initAdmin.js";

const app = express();
await connectDB();

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",").map((origin) =>
  origin.trim(),
);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/admin", routerAdmin);
app.use("/api/blog", routerBlog);
app.use("/api/comment", routerComment);

const PORT = process.env.PORT || 3000;

await initSiteSettings();
await initAdmin();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
