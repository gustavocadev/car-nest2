import { Car } from '~/cars/interfaces/cars.interface';
import crypto from 'node:crypto';

export const CARS_SEED = [
  {
    id: crypto.randomUUID(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: crypto.randomUUID(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: crypto.randomUUID(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
] satisfies Car[];
