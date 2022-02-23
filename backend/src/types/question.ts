interface IAnswer {
  id: string;
  body: string;
}

export interface IQuestion {
  id: string;
  title: string;
  answers: IAnswer[];
  correctAnswerId: string;
}