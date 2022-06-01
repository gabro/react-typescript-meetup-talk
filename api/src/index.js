// @ts-check
import express from "express";
const app = express();
const port = 8080;
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const dirname = fileURLToPath(new URL(".", import.meta.url));

const users = JSON.parse(readFileSync(path.join(dirname, "users.json"), "utf8"));
const usersNew = JSON.parse(readFileSync(path.join(dirname, "users-new.json"), "utf8"));

app.use(cors());

app.get("/users", (_req, res) => {
  res.contentType("application/json");
  res.send(users);
});

app.get("/users-new", (_req, res) => {
  res.contentType("application/json");
  res.send(usersNew);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
