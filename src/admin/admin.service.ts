import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AdminLoginDto, AdminUpdateDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async login(dto: AdminLoginDto) {
    const admin = await this.prisma.admin.findFirst({
      where: {
        login: dto.login,
      },
    });

    if (!admin) {
      throw new BadRequestException('Admin not found!');
    }

    const isValid = admin.password === dto.password;

    if (!isValid) {
      throw new BadRequestException('Invalid login or password');
    }

    return {
      admin: admin,
      status: 'success',
    };
  }

  async getAdminInfo() {
    const admin = await this.prisma.admin.findFirst({
      where: {
        id: 1,
      },
    });

    if (!admin) {
      throw new BadRequestException('Admin cannot get');
    }

    return admin;
  }

  async updateAdmin(dto: AdminUpdateDto) {
    const admin = await this.prisma.admin.update({
      where: {
        login: dto.login,
      },
      data: {
        about: dto.about,
        photo: dto.photo,
      },
    });

    if (!admin) {
      throw new BadRequestException('Admin not found!');
    }

    return admin;
  }
}
