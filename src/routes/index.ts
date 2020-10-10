import { Router } from 'express';
import dinosRouter from '../routes/dinosRouter.routes';

const routes = Router();

routes.use('/dinossaurs', dinosRouter);

export default routes;