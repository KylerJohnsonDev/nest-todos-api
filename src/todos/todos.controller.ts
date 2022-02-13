import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo';
import { CreateTodoDto } from './create-todo-dto';
import { UpdateTodoDto } from './update-todo-dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('todos')
@ApiTags('Todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all todos',
  })
  @ApiResponse({
    status: 200,
    type: [Todo],
  })
  async getTodos(): Promise<Todo[]> {
    return await this.todosService.getTodos();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a todo by id',
  })
  @ApiResponse({
    status: 200,
    type: Todo,
  })
  async getTodoById(@Param('id') id: string): Promise<Todo> {
    return await this.todosService.getTodoById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a todo',
  })
  @ApiBody({
    type: CreateTodoDto,
  })
  @ApiResponse({
    status: 201,
    type: Todo,
  })
  async addTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.todosService.addTodo(createTodoDto);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update a todo',
  })
  @ApiParam({
    type: 'string',
    name: 'id',
    required: true,
  })
  @ApiBody({
    type: UpdateTodoDto,
  })
  @ApiResponse({
    status: 200,
    type: Todo,
  })
  async updateTodo(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto | Partial<UpdateTodoDto>,
  ): Promise<Todo> {
    return await this.todosService.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a todo by id',
  })
  @ApiResponse({
    status: 200,
    type: Todo,
  })
  async deleteTodo(@Param('id') id: string): Promise<Todo> {
    return await this.todosService.deleteTodo(id);
  }
}
