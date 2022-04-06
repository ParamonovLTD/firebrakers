import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UploadedFiles,
  UseInterceptors
} from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { TestService } from './test.service';
import { ObjectId } from 'mongoose';
import { UpdateTestDto } from './dto/update-test.dto';
import { Public } from '../common/decorators';
import { SetTestResultDto } from './dto/set-test-result.dto';

@Controller('/tests')
export class TestController {
  constructor(private testService: TestService) {}

  @Public()
  @Post()
  createTest(@Body() dto: CreateTestDto) {
    return this.testService.createTest(dto)
  }

  @Public()
  @Get()
  getAllTests() {
    return this.testService.getAllTests()
  }

  @Public()
  @Put()
  updateTest(@Query('id') id: ObjectId, @Body() dto: UpdateTestDto) {
    return this.testService.updateTest(id, dto)
  }

  @Public()
  @Delete()
  deleteTest(@Query('id') id: ObjectId) {
    return this.testService.deleteTest(id)
  }

  @Public()
  @Get('results/:id')
  results(@Param('id') id: ObjectId) {
    return this.testService.results(id)
  }

  @Public()
  @Patch('results/:id')
  setResult(@Param('id') id: ObjectId, @Body() dto: SetTestResultDto) {
    return this.testService.setResult(id, dto)
  }
}