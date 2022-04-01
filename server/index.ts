import bodyParser from 'body-parser';
import express, { Request, Response, Application } from 'express';
import 'express-async-errors';
import { authSignUpRouter } from './src/routes/auth/signup';
import { authSignInRouter } from './src/routes/auth/signin';

const app: Application = express();
app.use(bodyParser.json());

app.use('/api/auth/signup', authSignUpRouter);
app.use('/api/auth/signin', authSignInRouter);

app.listen(3001, () => {
  console.log('Listening on 3001');
});
