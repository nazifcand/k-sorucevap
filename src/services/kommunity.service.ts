/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api.kommunity.com/api',
});

interface IParams {
  communitySlug: string;
  eventSlug?: string;
  status?: string;
}

export const fetchCommunity = ({ communitySlug, ...params }: IParams) => {
  return axios
    .get(`/v2/${communitySlug}`, { params: { ...params } })
    .then((res) => [null, res.data])
    .catch((err) => [err]);
};

export const fetchCommunityEvents = ({ communitySlug, ...params }: IParams) => {
  return axios
    .get(`/v1/${communitySlug}/events`, { params: { ...params } })
    .then((res) => [null, res.data])
    .catch((err) => [err]);
};

export const fetchEvent = ({
  communitySlug,
  eventSlug,
  ...params
}: IParams) => {
  return axios
    .get(`/v3/${communitySlug}/events/${eventSlug}`, { params: { ...params } })
    .then((res) => [null, res.data])
    .catch((err) => [err]);
};
