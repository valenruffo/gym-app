// scripts/seed-exercises.ts
import 'dotenv/config';
import mongoose from 'mongoose';
import { Exercise, ExerciseSchema } from '../schemas/exercise.schema';
import { EXERCISES } from '../exercises/data/exercises';


async function main() {
  await mongoose.connect(process.env.MONGODB_URI!);
  
  const ExerciseModel = mongoose.model('Exercise', ExerciseSchema);

  const keys = EXERCISES.map(e => e.id);
  for (const e of EXERCISES) {
    await ExerciseModel.updateOne(
      { key: e.id },
      { $set: { key: e.id, name: e.name, muscleGroup: e.muscleGroup, tags: e.tags ?? [], isActive: e.isActive ?? true, isCustom: false, createdBy: null } },
      { upsert: true }
    );
  }

  // opcional: desactivar los que ya no estén en el catálogo
  await ExerciseModel.updateMany({ key: { $nin: keys }, isCustom: false }, { $set: { isActive: false } });

  await mongoose.disconnect();
  console.log('✅ Seed exercises OK');
}
main().catch(async e => { console.error(e); await mongoose.disconnect(); process.exit(1); });
