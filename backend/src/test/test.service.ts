import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Test, TestDocument } from './schemas/test.schema';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { IResult } from '../types/result';
import { SetTestResultDto } from './dto/set-test-result.dto';


@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>) {}

  async createTest(dto: CreateTestDto): Promise<Test> {
    const test = await this.testModel.create({...dto, results: []})
    return test
  }

  async getAllTests(): Promise<Test[]> {
    const tests = await this.testModel.find()
    return tests
  }

  async updateTest(id: ObjectId, dto: UpdateTestDto): Promise<Test | null> {
    const testToUpdate = await this.testModel
      .findByIdAndUpdate(id, dto)
      .setOptions({ overwrite: true, new: true })

    return testToUpdate
  }

  async deleteTest(id: ObjectId): Promise<ObjectId> {
    const test = await this.testModel.findByIdAndRemove(id)
    return test?._id
  }

  async results(id: ObjectId): Promise<IResult[] | undefined> {
    const test: Test | null = await this.testModel.findById(id)
    return test?.results
  }

  async setResult(id: ObjectId, dto: SetTestResultDto): Promise<Test | null> {
    const testToUpdate = await this.testModel
      .findByIdAndUpdate(id, {
        $push: {'results': dto}
      })
      .setOptions({ overwrite: true, new: true })

    return testToUpdate
  }
}