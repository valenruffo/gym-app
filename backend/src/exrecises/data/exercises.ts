// src/exercises/data/exercises.ts
export type MuscleGroup = 'back'|'biceps'|'triceps'|'shoulders'|'chest'|'legs';

export const EXERCISES = [
  { id: 'press-banca', name: 'Press Banca', muscleGroup: 'chest' as MuscleGroup },
  { id: 'dorsalera', name: 'Dorsalera', muscleGroup: 'back' },
  { id: 'sentadilla', name: 'Sentadilla', muscleGroup: 'legs' },
  { id: 'hip-thrust', name: 'Hip Thrust ', muscleGroup: 'legs' },
  { id: 'curl-biceps', name: 'Curl de Biceps', muscleGroup: 'biceps' },
  { id: 'extension-de-triceps', name: 'Extension de Triceps', muscleGroup: 'triceps' },
  { id: 'press-triceps', name: 'Press de Triceps', muscleGroup: 'triceps' },
  { id: 'vuelos-laterales', name: 'Vuelos Laterales', muscleGroup: 'shoulders' },
  { id: 'press-militar', name: 'Press Militar', muscleGroup: 'shoulders' },

  // ...agregá los que uses
];
export function findExerciseById(id: string) {
  return EXERCISES.find(e => e.id === id) ?? null;
}
