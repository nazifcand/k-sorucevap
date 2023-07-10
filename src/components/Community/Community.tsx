import { FC } from 'react';
import { ICommunity } from '../../interfaces';
import { CommunitySocialNetworks } from '..';

interface IProps {
  community: ICommunity;
}

const Community: FC<IProps> = ({ community }) => {
  return (
    <div className="flex gap-8">
      <div className="relative">
        <img
          src={community.photo}
          alt={community.name}
          className="aspect-video rounded-lg max-h-[400px]"
          loading="lazy"
        />

        <img
          src={community.profile_photo}
          alt={community.name}
          className="w-[100px] rounded-lg aspect-square absolute left-4 bottom-4 bg-white border-[3px] shadow-lg border-white"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-4 justify-center box-border py-4">
        <h2 className="text-4xl font-bold">{community.name}</h2>
        <p
          className="text-gray-600 max-w-[80%]"
          dangerouslySetInnerHTML={{ __html: community.description }}
        ></p>

        <CommunitySocialNetworks socials={community.social_networks} />

        <div className="flex flex-col gap-2">
          <div className="flex items-center text-gray-700 gap-2">
            <i className="fas fa-map-marker-alt"></i>
            <span>{community.city?.name}</span>
          </div>

          <div className="flex items-center text-gray-700 gap-2">
            <i className="fas fa-users"></i>
            <span>{community.members_count} Üye</span>
          </div>

          <div className="flex items-center text-gray-700 gap-2">
            <i className="fas fa-history"></i>
            <span>{community.past_events_count} Geçmiş Etkinlik</span>
          </div>

          <div className="flex items-center text-gray-700 gap-2">
            <i className="fas fa-comments"></i>
            <span>15 Soru</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
