import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsulinUnitsPerDayNullable1637004613914 implements MigrationInterface {
  name = 'InsulinUnitsPerDayNullable1637004613914';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "patients" ALTER COLUMN "insulin_units_per_day" DROP NOT NULL`
    );
    await queryRunner.query(`COMMENT ON COLUMN "patients"."insulin_units_per_day" IS NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`COMMENT ON COLUMN "patients"."insulin_units_per_day" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "patients" ALTER COLUMN "insulin_units_per_day" SET NOT NULL`
    );
  }
}
