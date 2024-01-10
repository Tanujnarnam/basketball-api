import express from 'express'
import cors from 'cors'
import routes from './src/bucket_whiz/routes.js'

const app = express();

const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());

app.get("/", (req, res, next) =>{
  res.send("Hello World!");
});

app.use('/api/v1/buckets', routes);

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
});