import { Contact } from "../entities/contact";
import { AppDataSource } from "../data-source";
import express, { Request, Response } from "express";
import { IContact } from "../models/contact.model";

const contactRouter = express.Router();

contactRouter.get("/", async (req: Request, res: Response) => {
  try {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contacts = await contactRepository.find();
    return res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

contactRouter.post("/", async function (req: Request<IContact>, res: Response) {
  try {
    const contactRepository = AppDataSource.getRepository<IContact>(
      Contact
    ).create(req.body);
    const results = await AppDataSource.getRepository(Contact).save(
      contactRepository
    );
    return res.json(results);
  } catch (error) {
    console.error("Error posting contact:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default contactRouter;
