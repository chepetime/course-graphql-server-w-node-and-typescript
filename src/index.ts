import express from "express";
import bodyParser from "body-parser";
import { listings } from "./listings";

const app = express();
const port = 9000;

app.use(bodyParser.json());

app.get("/listings", (_req, res) => res.send(listings));

app.get("/listings/:id", (req, res) => {
  const id: string = req.params.id;
  const singleListing = listings.find((el) => el.id === id) || {};

  return res.send(singleListing);
});

app.delete("/listings/:id", (req, res) => {
  const id: string = req.params.id;

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1)[0]);
    }
  }

  return res.send({});
});

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
