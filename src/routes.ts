import express from "express";
import { VotesController } from "./controllers/votes";

const votesController = new VotesController();

const routes = express.Router();

routes.get("/votes", votesController.index);
routes.post("/votes", votesController.create);

export default routes;
