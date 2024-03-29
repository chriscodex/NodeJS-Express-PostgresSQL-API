import express from 'express';
import { router as productsRouter} from './products.router';
import { router as categoriesRouter} from './categories.router';
import { router as usersRouter} from './users.router';
import { router as customerRouter } from './customer.router';
import { router as ordersRouter } from './orders.router';


export function routerApi(app: express.Express) {
  const apiV1Router = express.Router()
  app.use('/api/v1', apiV1Router)

  apiV1Router.get('/',
  async (req, res, next) => {
    try {
      res.status(200).json({ message: 'Welcome to the API' });
    } catch (error) {
      next(error)
    }
  }
);

  // apiV1Router.use('/', productsRouter);
  apiV1Router.use('/products', productsRouter);
  apiV1Router.use('/categories', categoriesRouter);
  apiV1Router.use('/users', usersRouter);
  apiV1Router.use('/customers', customerRouter);
  apiV1Router.use('/orders', ordersRouter);
}
