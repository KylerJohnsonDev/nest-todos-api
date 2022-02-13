import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiProperty({
    description: 'should this update complete the todo',
  })
  shouldCompleteTodo?: boolean;

  @ApiProperty({
    description: 'a description of the todo item',
  })
  description?: string;
}
