import table from "../database/connection";

export class VotesModel {
  async index() {
    const data = await table("votes")
      .select("vote")
      .groupBy("vote")
      .count("vote");

    return data;
  }

  async create(voteNumber: string | number) {
    return await table("votes").insert({
      vote: voteNumber,
    });
  }
}
