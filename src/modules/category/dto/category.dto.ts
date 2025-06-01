import { ApiProperty } from "@nestjs/swagger";

class categoryDto {
  @ApiProperty({ description: 'name', example: 'อาหารกลางวัน' })
  name: string;

  @ApiProperty({ description: 'type', example: 'expense' })
  type: string;

  @ApiProperty({ description: 'userId', example: 1 })
  userId: number;
}