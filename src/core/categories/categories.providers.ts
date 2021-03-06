import { Connection } from 'mongoose';

import { CategorySchema } from 'src/database/schemas/category.schema';

export const categoriesProviders = [
  {
    provide: 'CATEGORY_MODEL',
    useFactory: (connection: Connection) => connection.model('Category', CategorySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
