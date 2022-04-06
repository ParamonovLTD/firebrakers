export interface IAnswer {
  id: string;
  body: string;
}

export interface IQuestion {
  id: string;
  title: string;
  answers: IAnswer[];
  correctAnswerId: string;
}

export interface IResult {
  id: string;
  userId: string;
  username: string;
  score: number;
}

export interface ITest {
  _id: string;
  title: string;
  questions: IQuestion[];
  results: IResult[];
}


export interface CreateTestData {
  title: string;
  questions: IQuestion[];
}

export interface CreateTestResponse {
  test: ITest;
}

export interface UpdateTestData {
  id: string;
  title: string;
  questions: IQuestion[];
}

export interface UpdateTestResponse {
  test: ITest;
}

export interface SetTestResultData {
  id: string;
  userId: string;
  username: string;
  score: number;
}

export interface SetTestResultResponse {
  test: ITest;
}