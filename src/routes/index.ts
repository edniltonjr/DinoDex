import { Router } from 'express';
import dinosRouter from './dinosRouter.routes';

const routes = Router();

routes.use('/dinossaurs', dinosRouter);

export default routes;
