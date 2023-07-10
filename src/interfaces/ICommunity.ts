import { ISocialNetworks, IUser } from '.';

interface ICommunity {
  id: string;
  name: string;
  short_description: string;
  description: string;
  slug: string;
  headline: string;
  photo: string;
  profile_photo: string;
  colors: string | null;
  banner: string | null;
  banner_image_name: string | null;
  analytics: null;
  social_networks: ISocialNetworks;
  members_count: number;
  waitings_count: number;
  events_count: number | null;
  past_events_count: number | null;
  isMember: boolean;
  isAdmin: boolean;
  isWaiting: boolean;
  is_owner: boolean;
  allowNotifications: boolean;
  who: string;
  created_at: string;
  updated_at: string;
  visibility: number;
  can_user_see_community: boolean;
  has_pro: boolean;
  joining_type: {
    free: boolean;
    paid: boolean;
  };
  is_online: boolean;
  city?: {
    id: number;
    name: string;
    slug: string;
    country: {
      iso2: string;
    };
    timezone: string;
  };
  country?: {
    id: number;
    name: string;
  };
  leaders?: [] | IUser[];
  members?: [] | IUser[];
}

export default ICommunity;
