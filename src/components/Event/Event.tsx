import { FC } from 'react';
import { IEvent } from '../../interfaces';
import { Link } from 'react-router-dom';

interface IProps {
  event: IEvent;
}

const Event: FC<IProps> = ({ event }) => {
  return (
    <div
      className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden bg-cover flex items-center justify-center shadow-lg relative border"
      style={{ backgroundImage: `url(${event.highlight_photo})` }}
    >
      <div className="w-full h-full hover:bg-gradient-to-b hover:from-transparent hover:to-black opacity-0 hover:opacity-100 flex flex-col justify-end p-4 gap-2 box-border text-white">
        <Link to={`/${event.community.slug}/${event.slug}`}>
          <h2 className="text-xl font-bold leading-5 text-s drop-shadow-md">
            {event.name}
          </h2>
        </Link>

        <div className="flex items-center gap-1 text-xs">
          <i className="fas fa-map-marker-alt drop-shadow-md"></i>
          <span className="drop-shadow-md">{event.venue.name}</span>
        </div>

        <div className="flex items-center gap-1 text-xs">
          <i className="far fa-calendar drop-shadow-md"></i>
          <span className="drop-shadow-md">
            {event.start_date_humanity.date}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs">
          <i className="fas fa-users drop-shadow-md"></i>
          <Link to={`/${event.community.slug}`} className="drop-shadow-md">
            {event.community.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
