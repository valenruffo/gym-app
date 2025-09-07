// src/exercises/data/exercises.ts
export type MuscleGroup = 'back'|'biceps'|'triceps'|'shoulders'|'chest'|'legs';

export const EXERCISES = [
  { id: 'bench-press', name: 'Bench Press', muscleGroup: 'chest' as MuscleGroup },
  { id: 'barbell-row', name: 'Barbell Row', muscleGroup: 'back' },
  { id: 'squat', name: 'Back Squat', muscleGroup: 'legs' },
  // ...agregá los que uses
];
export function findExerciseById(id: string) {
  return EXERCISES.find(e => e.id === id) ?? null;
}
