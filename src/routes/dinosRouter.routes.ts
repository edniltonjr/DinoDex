import { Router, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import DinossaursRepository from '../repositories/DinossaursRepository';

const dinosRouter = Router();

dinosRouter.get('/', async (request: Request, response: Response) => {
  const dinossaursRepository = getCustomRepository(DinossaursRepository);
  const dinossaurs = await dinossaursRepository.find();
  return response.json(dinossaurs);
});

export default dinosRouter;
