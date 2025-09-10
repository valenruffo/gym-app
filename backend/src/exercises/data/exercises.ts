// src/exercises/data/exercises.ts
export type MuscleGroup = 'back'|'biceps'|'triceps'|'shoulders'|'chest'|'legs';

export type ExerciseSeed = {
  id: string;
  name: string;
  muscleGroup?: string;
  tags?: string[];
  isActive?: boolean; // default true
};


export const EXERCISES: ExerciseSeed[] = [
  //chest
  { id: 'press-banca', name: 'Press Banca', muscleGroup: 'chest' },
  { id: 'press-inclinado', name: 'Press Inclinado', muscleGroup: 'chest'},
  { id: 'peck-deck', name: 'Peck Deck', muscleGroup: 'chest'},
  //back
  { id: 'dorsalera', name: 'Dorsalera', muscleGroup: 'back' },
  { id: 'curl-abdominal', name: 'Curl Abdominal', muscleGroup: 'back' },
  { id: 'remo-barra', name: 'Remo con Barra', muscleGroup: 'back'},
  { id: 'remo-mancuernas', name: 'Remo con Mancuerna', muscleGroup: 'back'},
  //biceps
  { id: 'curl-biceps', name: 'Curl de Biceps', muscleGroup: 'biceps' },
  { id: 'curl-scott', name: 'Curl Scott', muscleGroup: 'biceps'},
  //triceps
  { id: 'extension-de-triceps', name: 'Extension de Triceps', muscleGroup: 'triceps' },
  { id: 'press-triceps', name: 'Press de Triceps', muscleGroup: 'triceps' },
  { id: 'press-frances', name: 'Press Frances', muscleGroup: 'triceps'},
  //shoulders
  { id: 'vuelos-laterales', name: 'Vuelos Laterales', muscleGroup: 'shoulders' },
  { id: 'press-militar', name: 'Press Militar', muscleGroup: 'shoulders' },
  //legs
  { id: 'sentadilla', name: 'Sentadilla', muscleGroup: 'legs' },
  { id: 'peso-muerto-rumano', name: 'Peso Muerto Rumano', muscleGroup: 'legs' },
  { id: 'hip-thrust', name: 'Hip Thrust ', muscleGroup: 'legs' },
  { id: 'sentadilla-bulgara', name: 'Sentadilla Bulgara', muscleGroup: 'legs'},
  { id: 'extenciones-cuadriceps', name: 'Extensciones de Cuadriceps', muscleGroup: 'legs'},
  { id: 'curl-femoral', name: 'Curl Femoral', muscleGroup: 'legs'},
  { id: 'prensa', name: 'Prensa', muscleGroup: 'legs'},
  { id: 'aductores', name: 'Aductores', muscleGroup: 'legs'},
  { id: 'abductores', name: 'Abductores', muscleGroup: 'legs'},
  { id: 'extensiones-gemelos', name: 'Exrtensiones de Gemelos', muscleGroup: 'legs'},
]