// import connection from "../db";
// import { User } from "../models/user.model";

// class UserRepository {
//   // Find user by Firebase ID
//   async findByFirebaseId(firebaseId: string): Promise<User | null> {
//     const [rows] = await connection.promise().query<User[]>(
//       "SELECT * FROM users WHERE firebase_id = ?",
//       [firebaseId]
//     );
//     return rows.length ? rows[0] : null;
//   }

//   // Create a new user
//   async createUser(user: User): Promise<void> {
//     await connection.promise().query(
//       "INSERT INTO users (firebase_id, name, email) VALUES (?, ?, ?)",
//       [user.firebase_id, user.name, user.email]
//     );
//   }
// }

// export default new UserRepository();

import connection from "../db";
import User from "../models/user.model.ts";

interface IUserRepository {
  save(User: User): Promise<User>;
  retrieveById(UserId: number): Promise<User | undefined>;
  update(User: User): Promise<number>;
  delete(UserId: number): Promise<number>;
}

class UserRepository implements IUserRepository {

  retrieveById(UserId: number): Promise<User> { }

  update(User: User): Promise<number> { }

  delete(UserId: number): Promise<number> { }
}

export default new UserRepository();