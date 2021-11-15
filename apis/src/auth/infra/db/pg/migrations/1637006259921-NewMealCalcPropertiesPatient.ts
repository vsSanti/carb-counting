import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMealCalcPropertiesPatient1637006259921 implements MigrationInterface {
  name = 'NewMealCalcPropertiesPatient1637006259921';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "patients" ADD "sensibility_factor" integer`);
    await queryRunner.query(`ALTER TABLE "patients" ADD "insulin_carbohydrate_ratio" integer`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "insulin_carbohydrate_ratio"`);
    await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "sensibility_factor"`);
  }
}
