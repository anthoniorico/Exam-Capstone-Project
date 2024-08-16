// Create a file: types/express/index.d.ts

import { IUser } from '../../db'; // Import the IUser interface from your db file

declare module 'express-serve-static-core' {
  interface Request {
    user?: IUser;   // The user property, which is optional
    token?: string; // The token property, which is optional
  }
}