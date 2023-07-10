import { ILinks, IMeta } from '.';

interface IEvents<T> {
  data: [] | T[];
  links: ILinks;
  meta: IMeta;
}

export default IEvents;
