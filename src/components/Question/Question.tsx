import { FC } from 'react';
import { IQuestion } from '../../interfaces';

interface IProps {
  question: IQuestion;
}

const Question: FC<IProps> = ({ question }) => {
  return (
    <div className="w-full bg-white p-4 shadow rounded-lg flex flex-col box-border">
      <strong className="text-lg">{question.question}</strong>

      {question.answer && (
        <span className="text-sm mt-2  text-gray-600">{question.answer}</span>
      )}

      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-5">
          <span className="flex items-center gap-1 cursor-pointer text-green-500 hover:text-green-600">
            <i className="fas fa-thumbs-up"></i>
            <span className="">{question.like}</span>
          </span>

          <span className="flex items-center gap-1 cursor-pointer text-red-500 hover:text-red-600">
            <i className="fas fa-thumbs-down"></i>
            <span className="">{question.dislike}</span>
          </span>
        </div>
        <time className="ml-auto text-xs italic text-gray-400">
          {question.time}
        </time>
      </div>
    </div>
  );
};

export default Question;
