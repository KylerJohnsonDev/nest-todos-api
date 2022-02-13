import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Todo } from './todo';
import { CreateTodoDto } from './create-todo-dto';
import { UpdateTodoDto } from './update-todo-dto';

@Injectable()
export class TodosService {
  constructor(private prismaService: PrismaService) {}

  async getTodos(): Promise<Todo[]> {
    return await this.prismaService.todo.findMany();
  }

  async getTodoById(id: string): Promise<Todo> {
    return await this.prismaService.todo.findUnique({
      where: {
        id,
      },
    });
  }

  async addTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.prismaService.todo.create({
      data: {
        description: createTodoDto.description,
        completedAt: null,
      },
    });
  }

  async updateTodo(
    id: string,
    updateTodoDto: UpdateTodoDto | Partial<UpdateTodoDto>,
  ): Promise<Todo> {
    return await this.prismaService.todo.update({
      where: {
        id,
      },
      data: {
        isComplete: updateTodoDto?.shouldCompleteTodo,
        completedAt: updateTodoDto?.shouldCompleteTodo
          ? new Date().toISOString()
          : null,
        description: updateTodoDto.description,
      },
    });
  }

  async deleteTodo(id: string): Promise<Todo> {
    return await this.prismaService.todo.delete({
      where: {
        id,
      },
    });
  }
}
