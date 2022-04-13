import bodyParser from 'body-parser';
import express, { Application } from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import 'dotenv/config';
import { authSignUpRouter } from './src/routes/auth/signup';
import { authSignInRouter } from './src/routes/auth/signin';
import { authSignOutRouter } from './src/routes/auth/signout';
import { authActiveUserRouter } from './src/routes/auth/activeUser';

import { categoryRouter } from './src/routes/category';

import { productRouter } from './src/routes/product';
import { productAttrRouter } from './src/routes/productAttr';

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

app.use(authActiveUserRouter);
app.use(authSignInRouter);
app.use(authSignOutRouter);
app.use(authSignUpRouter);

app.use(productRouter);

app.use(categoryRouter);

app.use(productAttrRouter);

app.listen(3001, () => {
  console.log('Listening on 3001');
});
