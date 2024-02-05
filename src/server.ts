import "./utils/module-alias";
import { Server } from "@overnightjs/core";
import bodyParser from "body-parser";
import { Application } from "express";

// controllers
import controllers from "./controllers";

export class SetupServer extends Server {
  private port: number;

  constructor(port = 3000) {
    super();
    this.port = port;
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    this.addControllers([...controllers]);
  }

  public getApp(): Application {
    return this.app;
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();

    this.app.listen(this.port, () => {
      console.info("Server listening on port: ", this.port);
    });
  }
}
