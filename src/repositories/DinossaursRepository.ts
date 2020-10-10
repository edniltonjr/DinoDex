import { EntityRepository, Repository } from 'typeorm';
import Dinossaur from '../models/Dinossaur';

@EntityRepository(Dinossaur)
class DinossaursRepository extends Repository<Dinossaur> {
  public async findDinossaurs(): Promise<Dinossaur[]> {
    const getDinossaurs = await this.find();
    return getDinossaurs;
  }
}

export default DinossaursRepository;
