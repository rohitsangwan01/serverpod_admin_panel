import express from "express";
import * as url from "url";
import path from "path";
import { setupAdminJS } from "./admin.js";

const start = async () => {
  const app = express();

  // Load static assets
  app.use(
    express.static(
      path.join(url.fileURLToPath(new URL(".", import.meta.url)), "assets")
    )
  );

  setupAdminJS(app);

  app.listen(3000, () => {
    console.log("app started");
  });
};

start();
