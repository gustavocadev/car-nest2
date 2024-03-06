import crypto from 'node:crypto';
import { Brand } from '~/brands/entities/brand.entity';

export const BRANS_SEED = [
  {
    id: crypto.randomUUID(),
    name: 'Volvo',
    createdAt: new Date().getTime(),
  },
  {
    id: crypto.randomUUID(),
    name: 'Jeep',
    createdAt: new Date().getTime(),
  },
  {
    id: crypto.randomUUID(),
    name: 'Tesla',
    createdAt: new Date().getTime(),
  },
] satisfies Brand[];
