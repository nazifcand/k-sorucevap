interface IQuestion {
  question: string;
  answer?: string;
  like: number;
  dislike: number;
  speaker?: number;
  time: string;
}

export default IQuestion;
