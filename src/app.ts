import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("The server is running...");
});

export default app;
