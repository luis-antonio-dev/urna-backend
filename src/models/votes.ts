import fs from "fs";
import path from "path";
import storage from "../database/storage.json";

export class VotesModel {
  index() {
    return storage;
  }

  create(voteNumber: string | number) {
    if (voteNumber in storage) {
      storage[voteNumber] = storage[voteNumber] + 1;
    } else {
      storage[voteNumber] = 1;
    }

    fs.writeFileSync(
      path.resolve(__dirname, "..", "database", "storage.json"),
      JSON.stringify(storage),
      "utf8"
    );
  }
}
