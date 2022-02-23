import { IQuestion } from '../../types/question';

export class CreateTestDto {
  readonly title: string;
  readonly questions: IQuestion[];
}