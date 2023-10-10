import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminLoginDto, AdminUpdateDto } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('/info')
  getAdminInfo() {
    return this.adminService.getAdminInfo();
  }

  @Post('/login')
  login(@Body() dto: AdminLoginDto) {
    return this.adminService.login(dto);
  }

  @Patch('/info')
  update(@Body() dto: AdminUpdateDto) {
    return this.adminService.updateAdmin(dto);
  }
}
