import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1601984435831 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'dinossaurs',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',

          },
          {
            name: 'scientific_name',
            type: 'varchar',

          },

          {
            name: 'description',
            type: 'varchar',
            isNullable: true,

          },

          {
            name: 'classification',
            type: 'varchar',
            isNullable: true,

          },

          {
            name: 'kingdom',
            type: 'varchar',
            isNullable: true,

          },

          {
            name: 'phylum',
            type: 'varchar',
            isNullable: true,

          },

          {
            name: 'class',
            type: 'varchar',
            isNullable: true,

          },

          {
            name: 'order',
            type: 'varchar',
            isNullable: true,

          },

          {
            name: 'superorder',
            type: 'varchar',
            isNullable: true,

          },
          

          {
            name: 'suborder',
            type: 'varchar',
            isNullable: true,

          },


          {
            name: 'genre',
            type: 'varchar',
            isNullable: true,

          },

          {
            name: 'species',
            type: 'varchar',
            isNullable: true,

          },

          {
            name: 'weight',
            type: 'varchar',
            isNullable: true,

          },

          {
            name: 'height',
            type: 'varchar',
            isNullable: true,

          },
          
          {
            name: 'length',
            type: 'varchar',
            isNullable: true,

          },

          {
            name: 'locality_found',
            type: 'varchar',
            isNullable: true,

          },

          {
            name: 'date_discovery',
            type: 'varchar',
            isNullable: true,

          },


          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,

          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('dinossaurs');
  }
}
