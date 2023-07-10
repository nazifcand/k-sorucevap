import { useEffect, useState } from 'react';
import { EventList } from '../components';
import { IEvent, IKommunityResponse } from '../interfaces';
import { fetchCommunityEvents } from '../services/kommunity.service';

const initialData = {
  data: [],
  links: {
    first: null,
    last: null,
    next: null,
    prev: null,
  },
  meta: {
    current_page: 0,
    from: 0,
    last_page: 0,
    links: [],
    path: '',
    per_page: 0,
    to: 0,
    total: 0,
  },
};

const IndexRoute = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [events, setEvents] = useState<IKommunityResponse<IEvent>>(initialData);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const [err, response] = await fetchCommunityEvents({
        // communitySlug: 'bursa-bilisim-toplulugu',
        communitySlug: 'devops-turkiye',
        status: 'past',
      });
      setLoading(false);

      if (err) {
        console.log(err.response.data);
        return;
      }

      setEvents(response);
    })();
  }, []);

  return (
    <>
      <div className="container mx-auto mb-4">
        <div className="w-full aspect-[4/1] flex items-center justify-center shadow-lg bg-gray-100 rounded-lg">
          SLIDER 4:1
        </div>
      </div>

      <div className="container mx-auto mb-4 flex justify-end">
        {/* TODO: Buraya tab butonlari gelecek! */}
        Yaklasan(5) / Gecmis(15)
      </div>

      <div className="container mx-auto">
        <EventList loading={loading} events={events.data} />
      </div>

      {/* <div className="container mx-auto flex flex-col gap-4">
        <Link to="/bursa-bilisim-toplulugu" className="hover:text-rose-500">
          Bursa Bilişim Topluluğu
        </Link>

        <Link to="/js-izmir" className="hover:text-rose-500">
          JS İzmir
        </Link>

        <Link to="/devops-turkiye" className="hover:text-rose-500">
          DevOps Türkiye
        </Link>
      </div> */}
    </>
  );
};

export default IndexRoute;
