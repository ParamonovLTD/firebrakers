import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { UserRoles } from '../../types/user';

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({ required: true})
  name: string;

  @Prop({ unique: true, required: true})
  email: string;

  @Prop({ required: true})
  password: string;

  @Prop()
  role: UserRoles;
}

export const UserSchema = SchemaFactory.createForClass(User);