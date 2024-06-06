

import Dexie, { type EntityTable } from 'dexie';

interface Student {
  id: number; // This prop will be used as primary key (see below)
  name: string;
  age: number;
}

const db = new Dexie('FriendsDatabase') as Dexie & {
  students: EntityTable<
  Student,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  students: '++id, name, age' // primary key "id" (for the runtime!)
});

export type { Student };
export { db };