import { FC } from 'react';
import { Event } from '..';
import { IEvent } from '../../interfaces';

interface IProps {
  loading?: boolean;
  events?: IEvent[];
}

const EventList: FC<IProps> = ({ loading = false, events }) => {
  return (
    <>
      {loading ? (
        <span className="text-gray-500 text-sm">yükleniyor...</span>
      ) : (
        <div className="w-full min-h-[100px] grid gap-4 grid-cols-4">
          {events?.map((event: IEvent, index: number) => (
            <Event key={index} event={event} />
          ))}
        </div>
      )}
    </>
  );
};

export default EventList;
