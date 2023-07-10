import { useEffect, useState } from 'react';
import { ICommunity, IEvent, IKommunityResponse } from '../interfaces';
import { Link, useOutlet, useParams } from 'react-router-dom';
import {
  fetchCommunity,
  fetchCommunityEvents,
} from '../services/kommunity.service';
import { Community, EventList } from '../components';

const initialCommunityData = {
  id: '',
  name: '',
  short_description: '',
  description: '',
  slug: '',
  headline: '',
  photo: '',
  profile_photo: '',
  colors: '',
  banner: '',
  banner_image_name: '',
  analytics: null,
  social_networks: {
    twitter: '',
    website: '',
    telegram: '',
    instagram: '',
  },
  members_count: 0,
  waitings_count: 0,
  events_count: 0,
  past_events_count: 0,
  isMember: false,
  isAdmin: false,
  isWaiting: false,
  is_owner: false,
  allowNotifications: false,
  who: '',
  created_at: '',
  updated_at: '',
  visibility: 0,
  can_user_see_community: false,
  has_pro: false,
  joining_type: {
    free: false,
    paid: false,
  },
  is_online: false,
  city: {
    id: 0,
    name: '',
    slug: '',
    country: {
      iso2: '',
    },
    timezone: '',
  },
  country: {
    id: 0,
    name: '',
  },
  leaders: [],
  members: [],
};

const initialEventsData = {
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

export const CommunityRoute = () => {
  const outlet = useOutlet();

  const { communitySlug = 'bursa-bilisim-toplulugu', eventSlug } = useParams<{
    communitySlug: string;
    eventSlug?: string;
  }>();

  const [isFetchingCommunity, setIsFetchingCommunity] =
    useState<boolean>(false);
  const [community, setCommunity] = useState<ICommunity>(initialCommunityData);

  const [isFetchingEvents, setIsFetchingEvents] = useState<boolean>(false);
  const [events, setEvents] =
    useState<IKommunityResponse<IEvent>>(initialEventsData);

  // fetch community
  useEffect(() => {
    (async () => {
      setIsFetchingCommunity(true);
      const [err, response] = await fetchCommunity({ communitySlug });
      setIsFetchingCommunity(false);

      if (err) {
        console.log(err.response.data);
        return;
      }

      setCommunity(response.data);
    })();
  }, [communitySlug]);

  // fetch events
  useEffect(() => {
    (async () => {
      setIsFetchingEvents(true);
      const [err, response] = await fetchCommunityEvents({
        communitySlug,
        status: 'past',
      });
      setIsFetchingEvents(false);

      if (err) {
        console.log(err.response.data);
        return;
      }

      setEvents(response);
    })();
  }, [communitySlug]);

  return (
    <>
      <div className="container mx-auto">
        {!isFetchingCommunity && <Community community={community} />}
      </div>

      <div className="container mx-auto">
        <div className="border-b my-8"></div>
      </div>

      {eventSlug && (
        <div className="container mx-auto mb-4">
          <Link
            to={`/${communitySlug}`}
            className="flex items-center gap-4 hover:text-yellow-500"
          >
            <i className="fas fa-arrow-left"></i>
            <span>
              <strong>Topluluğun</strong> diğer etkinliklerine göz at
            </span>
          </Link>
        </div>
      )}

      {outlet ? (
        outlet
      ) : (
        <>
          <div className="container mx-auto mb-4 flex justify-end">
            {/* TODO: Buraya tab butonlari gelecek! */}
            Yaklasan(5) / Gecmis(15)
          </div>

          <div className="container mx-auto">
            <EventList loading={isFetchingEvents} events={events.data} />
          </div>
        </>
      )}
    </>
  );
};
