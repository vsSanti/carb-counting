import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMealCalcPropertiesPatient1637012740928 implements MigrationInterface {
  name = 'NewMealCalcPropertiesPatient1637012740928';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "meals" ADD "patient_sensibility_factor" integer`);
    await queryRunner.query(`ALTER TABLE "meals" ADD "patient_insulin_carbohydrate_ratio" integer`);
    await queryRunner.query(
      `ALTER TABLE "meals" ALTER COLUMN "patient_insulin_units_per_day" DROP NOT NULL`
    );
    await queryRunner.query(`COMMENT ON COLUMN "meals"."patient_insulin_units_per_day" IS NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`COMMENT ON COLUMN "meals"."patient_insulin_units_per_day" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "meals" ALTER COLUMN "patient_insulin_units_per_day" SET NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE "meals" DROP COLUMN "patient_insulin_carbohydrate_ratio"`);
    await queryRunner.query(`ALTER TABLE "meals" DROP COLUMN "patient_sensibility_factor"`);
  }
}
