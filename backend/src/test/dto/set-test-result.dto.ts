import { IResult } from '../../types/result';

export class SetTestResultDto {
  readonly id: string;
  readonly userId: string;
  readonly username: string;
  readonly score: number;
}