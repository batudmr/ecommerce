import bodyParser from 'body-parser';
import express, { Application } from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import 'dotenv/config';
import { authSignUpRouter } from './src/routes/auth/signup';
import { authSignInRouter } from './src/routes/auth/signin';
import { authSignOutRouter } from './src/routes/auth/signout';
import { authActiveUserRouter } from './src/routes/auth/activeUser';

const app: Application = express();
app.set('trust proxy', 1);
app.use(bodyParser.json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use('/api/auth/current-user', authActiveUserRouter);
app.use('/api/auth/signin', authSignInRouter);
app.use('/api/auth/signout', authSignOutRouter);
app.use('/api/auth/signup', authSignUpRouter);

app.listen(3001, () => {
  console.log('Listening on 3001');
});
