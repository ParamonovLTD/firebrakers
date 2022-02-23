import { IQuestion } from '../../types/question';

export class UpdateTestDto {
  readonly title: string;
  readonly questions: IQuestion[];
}