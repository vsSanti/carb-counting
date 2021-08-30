import { MigrationInterface, QueryRunner } from 'typeorm';

export class MealFoodsModelWithoutIds1630280889634 implements MigrationInterface {
  name = 'MealFoodsModelWithoutIds1630280889634';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "meal_foods" DROP CONSTRAINT "FK_dad0c5f42ac4a8fd69fada80beb"`
    );
    await queryRunner.query(
      `ALTER TABLE "meal_foods" DROP CONSTRAINT "FK_131a21e4b4d88fa5ea9fad5376c"`
    );
    await queryRunner.query(`ALTER TABLE "meal_foods" ALTER COLUMN "meal_id" DROP NOT NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "meal_foods"."meal_id" IS NULL`);
    await queryRunner.query(`ALTER TABLE "meal_foods" ALTER COLUMN "food_id" DROP NOT NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "meal_foods"."food_id" IS NULL`);
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
    await queryRunner.query(`COMMENT ON COLUMN "meal_foods"."food_id" IS NULL`);
    await queryRunner.query(`ALTER TABLE "meal_foods" ALTER COLUMN "food_id" SET NOT NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "meal_foods"."meal_id" IS NULL`);
    await queryRunner.query(`ALTER TABLE "meal_foods" ALTER COLUMN "meal_id" SET NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "meal_foods" ADD CONSTRAINT "FK_131a21e4b4d88fa5ea9fad5376c" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "meal_foods" ADD CONSTRAINT "FK_dad0c5f42ac4a8fd69fada80beb" FOREIGN KEY ("meal_id") REFERENCES "meals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
