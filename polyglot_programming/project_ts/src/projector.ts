import { Config } from "./config"
import * as fs from "fs";
import * as path from "path";

export type Data = {
  projector: {
    [key: string]: {
      [key: string]: string,
    }
  }
}

const defaultData = {
  projector: {}
}

export class Projector {
  constructor(private config: Config, private data: Data) { }

  getValueAll(): { [key: string]: string } {
    let curr = this.config.pwd;
    let prev = "";

    let out = {};
    const paths = [];

    do {
      prev = curr;
      paths.push(curr);
      curr = path.dirname(curr);

    } while (curr != prev);

    return paths.reverse()
      .reduce((acc, path) => {
        const value = this.data.projector[path];

        if (value) {
          Object.assign(acc, value);
        }

        return acc;
      }, {});
  }

  getValue(key: string): string | undefined {
    let curr = this.config.pwd;
    let prev = "";
    let out: string = undefined;

    do {
      const value = this.data.projector[curr]?.[key];

      if (value) {
        out = value;
        break;
      }

      prev = curr;
      curr = path.dirname(curr);

    } while (curr != prev);

    return out;
  }


  setValue(key: string, value: string) {
    let dir = this.data.projector[this.config.pwd];

    if (!dir) {
      dir = this.data.projector[this.config.pwd] = {};
    }

    dir[key] = value;
  }

  removeValue(key: string) {
    let dir = this.data.projector[this.config.pwd];

    if (dir) {
      delete dir[key];
    }
  }

  static fromConfig(config: Config): Projector {
    if (fs.existsSync(config.config)) {
      let data: Data = undefined;

      try {
        data = JSON.parse(fs.readFileSync(config.config).toString());
      } catch (error) {
        data = defaultData;
      }

      return new Projector(config, data);
    }
  }
}
