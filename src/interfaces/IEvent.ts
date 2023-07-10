import ICommunity from './ICommunity';
import IDate from './IDate';
import IUser from './IUser';
import IVenue from './IVenue';

interface IEvent {
  id: string;
  community_id: string;
  venue: IVenue;
  name: string;
  slug: string;
  detail: string;
  event_where: string;
  hide_location: string | null;
  start_date: IDate;
  end_date: IDate;
  start_date_humanity: IDate;
  rsvp_limit: null | boolean;
  guest_rsvp_limit: null | boolean;
  is_featured: number;
  status: number;
  rsvp_status: boolean | boolean;
  photo_count: number;
  highlight_photo: string;
  is_organizer: boolean;
  user_rsvp_status: boolean | boolean;
  user_joined_rsvp: boolean | boolean;
  user_is_waitlisted: boolean;
  user_is_verified_join_status: boolean;
  users_count: boolean | number;
  community: ICommunity;
  latest_users: [] | IUser[];
  users?: [] | IUser[];
  key: null;
  calendar_links: {
    google: string;
    ics: string;
  };
  created_at: string;
  updated_at: string;
  attendance_type: number;
  is_online: boolean;
  is_approved_attendance: boolean;
  language: string;
  who_can_see: number;
  timezone: string;
  has_started: boolean;
  has_ended: boolean;
  recurring_event_id: number;
  is_canceled: boolean;
}

export default IEvent;
