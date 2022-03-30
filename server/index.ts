import bodyParser from 'body-parser';
import express, { Request, Response, Application } from 'express';

const app: Application = express();
app.use(bodyParser.json());
app.post('/api/auth/signin', (req, res) => {
  const { username, password } = req.body;
  res;
});

app.listen(3001, () => {
  console.log('Listening on 3001');
});
