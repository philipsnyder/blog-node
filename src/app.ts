import express from "express";
import { AppDataSource } from "./data-source";
import contactRouter from "./services/contact.service";
import cors from "cors";

// connect to database
AppDataSource.initialize()
  .then(() => {
    console.log("Data source has been initialized");
  })
  .catch((err) => {
    console.log("Error during data source initialization: ", err);
  });

// setup Express server & tsoa routes
const app = express();
const port = 3300;
app.use(cors());

app.use(express.json());
app.use("/contacts", contactRouter);

// start the server
app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
