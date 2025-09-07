// src/exercises/data/exercises.ts
export type MuscleGroup = 'back'|'biceps'|'triceps'|'shoulders'|'chest'|'legs';

export const EXERCISES = [
  { id: 'press-banca', name: 'Press Banca', muscleGroup: 'chest'},
  { id: 'dorsalera', name: 'Dorsalera', muscleGroup: 'back' },
  { id: 'sentadilla', name: 'Sentadilla', muscleGroup: 'legs' },
  { id: 'hip-thrust', name: 'Hip Thrust ', muscleGroup: 'legs' },
  { id: 'curl-biceps', name: 'Curl de Biceps', muscleGroup: 'biceps' },
  { id: 'extension-de-triceps', name: 'Extension de Triceps', muscleGroup: 'triceps' },
  { id: 'press-triceps', name: 'Press de Triceps', muscleGroup: 'triceps' },
  { id: 'vuelos-laterales', name: 'Vuelos Laterales', muscleGroup: 'shoulders' },
  { id: 'press-militar', name: 'Press Militar', muscleGroup: 'shoulders' },
  { id: 'peso-muerto-rumano', name: 'Peso Muerto Rumano', muscleGroup: 'legs' },
  { id: 'peck-deck', name: 'Peck Deck', muscleGroup: 'chest'},
  { id: 'press-inclinado', name: 'Press Inclinado', muscleGroup: 'chest'},
  { id: 'extensiones-gemelos', name: 'Exrtensiones de Gemelos', muscleGroup: 'legs'},
  { id: 'aductores', name: 'Aductores', muscleGroup: 'legs'},
  { id: 'abductores', name: 'Abductores', muscleGroup: 'legs'},
  { id: 'remo-barra', name: 'Remo con Barra', muscleGroup: 'back'},
  { id: 'remo-mancuernas', name: 'Remo con Mancuerna', muscleGroup: 'back'},
  { id: 'remo-mancuernas', name: 'Remo con Mancuerna', muscleGroup: 'back'},
  { id: 'press-frances', name: 'Press Frances', muscleGroup: 'triceps'},
  { id: 'curl-scott', name: 'Curl Scott', muscleGroup: 'biceps'},
  { id: 'extenciones-cuadriceps', name: 'Extensciones de Cuadriceps', muscleGroup: 'legs'},
  { id: 'curl-femoral', name: 'Curl Femoral', muscleGroup: 'legs'},
  { id: 'prensa', name: 'Prensa', muscleGroup: 'legs'},
  { id: 'sentadilla-bulgara', name: 'Sentadilla Bulgara', muscleGroup: 'legs'},
  
  

  // ...agregá los que uses
];
export function findExerciseById(id: string) {
  return EXERCISES.find(e => e.id === id) ?? null;
}
