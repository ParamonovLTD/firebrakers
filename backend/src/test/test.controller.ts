import { Body, Controller, Delete, Get, Param, Post, Put, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { TestService } from './test.service';
import { ObjectId } from 'mongoose';
import { UpdateTestDto } from './dto/update-test.dto';

@Controller('/tests')
export class TestController {
  constructor(private testService: TestService) {}

  @Post()
  createTest(@Body() dto: CreateTestDto) {
    return this.testService.createTest(dto)
  }

  @Get()
  getAllTests() {
    return this.testService.getAllTests()
  }

  @Put(':id')
  updateTest(@Param('id') id: ObjectId, @Body() dto: UpdateTestDto) {
    return this.testService.updateTest(id, dto)
  }

  @Delete(':id')
  deleteTest(@Param('id') id: ObjectId) {
    return this.testService.deleteTest(id)
  }

  @Get('results/:id')
  results(@Param('id') id: ObjectId) {
    return this.testService.results(id)
  }
}