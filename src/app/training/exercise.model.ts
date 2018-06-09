 export interface Exercese {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date?: Date;
  state?: 'complited' | 'cancelled' | null;
}
