import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
  @ApiProperty({
    description: 'The description of a todo',
    default: 'Wash the dishes',
  })
  description: string;
}
