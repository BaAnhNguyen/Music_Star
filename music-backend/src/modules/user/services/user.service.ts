import { userRepository } from '../repositories/user.repository';
import { ICreateUser, IUpdateUser } from '../interfaces/user.interface';
import { BadRequestError, NotFoundError } from '../../../common/utils/AppError';

export class UserService {
  private readonly repository = userRepository;

  async create(data: ICreateUser) {
    const existing = await this.repository.findByEmail(data.email);
    if (existing) throw new BadRequestError('Email đã tồn tại');
    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findMany();
  }

  async findById(id: string) {
    const user = await this.repository.findById(id);
    if (!user) throw new NotFoundError('Người dùng không tìm thấy');
    return user;
  }

  async updateById(id: string, data: IUpdateUser) {
    const updated = await this.repository.updateById(id, data);
    if (!updated) throw new NotFoundError('Người dùng không tìm thấy');
    return updated;
  }

  async deleteById(id: string) {
    const deleted = await this.repository.deleteById(id);
    if (!deleted) throw new NotFoundError('Người dùng không tìm thấy');
    return deleted;
  }
}

export const userService = new UserService();
