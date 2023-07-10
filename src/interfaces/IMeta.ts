interface ILink {
  url: string | null;
  label: string;
  active: false;
}

interface IMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: [] | ILink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export default IMeta;
