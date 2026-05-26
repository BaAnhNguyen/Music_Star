import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Thêm Decorator này để biến PrismaModule thành Global, không cần import lại ở các module khác
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}