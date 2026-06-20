import { BaseRepository } from '../../../common/repositories/base.repository';
import { User, IUser } from '../../../models/user.model';

export class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(User);
  }

  findByEmail(email: string) {
    return User.findOne({ email: email.toLowerCase() }).exec();
  }
}

export const userRepository = new UserRepository();
