export interface Food {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  taco_id: number;
  description: string;
  group: string;
  energy?: number | null;
  protein?: number | null;
  lipid?: number | null;
  carbohydrate?: number | null;
  fiber?: number | null;
  sodium?: number | null;
}
