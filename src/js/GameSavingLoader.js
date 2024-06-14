import read from "./reader";
import json from "./parser";
export default class GameSavingLoader {
  static load() {
      return read().then((response1) => {
        return json(response1).then((response2) => {
          return JSON.parse(response2);
        });
      })
    }
}