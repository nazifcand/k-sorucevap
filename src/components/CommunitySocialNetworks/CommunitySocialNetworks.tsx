import { FC } from 'react';
import { ISocialNetworks } from '../../interfaces';
import { Link } from 'react-router-dom';

interface IProps {
  socials: ISocialNetworks;
}

const CommunitySocialNetworks: FC<IProps> = ({ socials }) => {
  return (
    <div className="flex gap-4 text-xl">
      {/* website */}
      {socials.website && (
        <Link
          to={socials.website}
          target="_blank"
          className="text-gray-600 hover:text-black"
        >
          <i className="fas fa-earth"></i>
        </Link>
      )}

      {/* slack */}
      {socials.slack && (
        <Link
          to={socials.slack}
          target="_blank"
          className="text-gray-600 hover:text-black"
        >
          <i className="fab fa-slack"></i>
        </Link>
      )}

      {/* telegram */}
      {socials.telegram && (
        <Link
          to={socials.telegram}
          target="_blank"
          className="text-gray-600 hover:text-black"
        >
          <i className="fab fa-telegram"></i>
        </Link>
      )}

      {/* discord */}
      {socials.discord && (
        <Link
          to={socials.discord}
          target="_blank"
          className="text-gray-600 hover:text-black"
        >
          <i className="fab fa-discord"></i>
        </Link>
      )}

      {/* instagram */}
      {socials.instagram && (
        <Link
          to={`https://www.instagram.com/${socials.instagram}`}
          target="_blank"
          className="text-gray-600 hover:text-black"
        >
          <i className="fab fa-instagram"></i>
        </Link>
      )}

      {/* facebook */}
      {socials.facebook && (
        <Link
          to={`https://www.facebook.com/${socials.facebook}`}
          target="_blank"
          className="text-gray-600 hover:text-black"
        >
          <i className="fab fa-facebook"></i>
        </Link>
      )}

      {/* twitter */}
      {socials.twitter && (
        <Link
          to={`https://www.twitter.com/${socials.twitter}`}
          target="_blank"
          className="text-gray-600 hover:text-black"
        >
          <i className="fab fa-twitter"></i>
        </Link>
      )}

      {/* twitch */}
      {socials.twitch && (
        <Link
          to={`https://www.twitch.tv/${socials.twitch}`}
          target="_blank"
          className="text-gray-600 hover:text-black"
        >
          <i className="fab fa-twitch"></i>
        </Link>
      )}

      {/* medium */}
      {socials.medium && (
        <Link
          to={`https://www.medium.com/@${socials.medium}`}
          target="_blank"
          className="text-gray-600 hover:text-black"
        >
          <i className="fab fa-medium"></i>
        </Link>
      )}
    </div>
  );
};

export default CommunitySocialNetworks;
