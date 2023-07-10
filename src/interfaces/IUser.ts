interface IUser {
  id: string;
  name: string;
  username: string;
  avatar: string;
  pivot: {
    status: number;
    created_at: string;
    check_in_count: null;
    checked_in_at: null;
  };
  is_protected: boolean;
  is_following: boolean;
  is_visible: boolean;
  has_following_request: boolean;
  answer_id: null;
  answer: null;
}

export default IUser;
