import { ApiProperty } from '@nestjs/swagger';

export class Todo {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty({
    default: false,
  })
  isComplete: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  completedAt: Date;
}
