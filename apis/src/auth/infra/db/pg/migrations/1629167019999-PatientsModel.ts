import { MigrationInterface, QueryRunner } from 'typeorm';

export class PatientsModel1629167019999 implements MigrationInterface {
  name = 'PatientsModel1629167019999';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TYPE "patients_sex_enum" AS ENUM('masculine', 'feminine')`);
    await queryRunner.query(
      `CREATE TABLE "patients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "sex" "patients_sex_enum" NOT NULL, "weight" integer NOT NULL, "height" integer NOT NULL, "glycemic_target" integer NOT NULL, "insulin_units_per_day" integer NOT NULL, CONSTRAINT "UQ_64e2031265399f5690b0beba6a5" UNIQUE ("email"), CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "patients"`);
    await queryRunner.query(`DROP TYPE "patients_sex_enum"`);
  }
}
