import { MigrationInterface, QueryRunner } from 'typeorm';

export class MealModel1630274593885 implements MigrationInterface {
  name = 'MealModel1630274593885';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "meals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "patient_id" uuid NOT NULL, "patient_insulin_units_per_day" integer NOT NULL, "patient_glycemic_target" integer NOT NULL, "glucose_measurement" integer NOT NULL, "insulin_units_to_be_applied" numeric NOT NULL, "patient_weight" numeric, "patient_height" numeric, CONSTRAINT "PK_e6f830ac9b463433b58ad6f1a59" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "meals"`);
  }
}
