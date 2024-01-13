import express from "express";
import env from './src/config/environment.config.js'
import { connectDB } from "./src/config/db.config.js";
import productRouter from "./src/features/products/products.routes.js";

const port=process.env.PORT || 8050
/** CONFIGURATION */
const app = express();
app.use(express.json());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

/**       */ 

app.use('/api/products',productRouter);

 /** APP LISTEN IF DB CONNECTED */  
connectDB()
  .then((connectedDb) => {
    app.listen(port, () => {
      console.log(`app listening on port : ${port}`);
      console.log(`connected to DB :: ${connectedDb.name}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));