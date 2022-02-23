import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose'
import { IQuestion } from '../../types/question';
import { IResult } from '../../types/result';

export type TestDocument = Test & Document;

@Schema()
export class Test {
  @Prop()
  title: string;

  @Prop()
  questions: IQuestion[];

  @Prop()
  results: IResult[];
}

export const TestSchema = SchemaFactory.createForClass(Test);