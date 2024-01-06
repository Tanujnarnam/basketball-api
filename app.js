import express from 'express'
import routes from './src/bucket_whiz/routes.js'

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) =>{
  res.send("Hello World!");
});

app.use('/api/v1/buckets', routes);

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
});