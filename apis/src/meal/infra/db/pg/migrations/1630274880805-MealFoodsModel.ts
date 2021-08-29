import { MigrationInterface, QueryRunner } from 'typeorm';

export class MealFoodsModel1630274880805 implements MigrationInterface {
  name = 'MealFoodsModel1630274880805';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "meal_foods" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "meal_id" uuid NOT NULL, "food_id" uuid NOT NULL, "weight" numeric NOT NULL, "carbohydrate_total" numeric NOT NULL, CONSTRAINT "PK_ecfb33c2d4496ad3300728443de" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "meal_foods" ADD CONSTRAINT "FK_dad0c5f42ac4a8fd69fada80beb" FOREIGN KEY ("meal_id") REFERENCES "meals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "meal_foods" ADD CONSTRAINT "FK_131a21e4b4d88fa5ea9fad5376c" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "meal_foods" DROP CONSTRAINT "FK_131a21e4b4d88fa5ea9fad5376c"`
    );
    await queryRunner.query(
      `ALTER TABLE "meal_foods" DROP CONSTRAINT "FK_dad0c5f42ac4a8fd69fada80beb"`
    );
    await queryRunner.query(`DROP TABLE "meal_foods"`);
  }
}
