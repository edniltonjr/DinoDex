/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('dinossaurs')
class Dinossaur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  scientific_name: string;

  @Column()
  description: string;

  @Column()
  classification: string;

  @Column()
  kingdom: string;

  @Column()
  phylum: string;

  @Column()
  class: string;

  @Column()
  order: string;

  @Column()
  superorder: string;

  @Column()
  suborder: string;

  @Column()
  genre: string;

  @Column()
  species: string;

  @Column()
  weight: string;

  @Column()
  height: string;

  @Column()
  length: string;

  @Column()
  locality_found: string;

  @Column()
  date_discovery: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Dinossaur;
