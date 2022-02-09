export interface Feature {
  id: number;
  title: string;
  body: string;
  imgURL: string;
  isLink?: boolean;
  linkText?: string;
  linkURL?: string;
}