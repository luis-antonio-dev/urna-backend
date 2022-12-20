import { Request, Response } from "express";
import { VotesModel } from "../models/votes";

export class VotesController {
  async index(_: Request, response: Response) {
    const votesModel = new VotesModel();

    return response.json(await votesModel.index());
  }

  async create(request: Request, response: Response) {
    const votesModel = new VotesModel();

    const vote = request.body.vote as string;
    votesModel.create(vote);

    return response.sendStatus(201);
  }
}
