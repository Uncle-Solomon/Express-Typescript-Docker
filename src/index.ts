import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Solomon222",
  });
});

app.listen(4000, () => console.log("Listening on port 4000"));
