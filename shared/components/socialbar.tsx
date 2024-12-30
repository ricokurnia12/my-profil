import { useContext } from 'react';
import { PersonalDetailsContext } from '@utils/contexts';
import { PersonalDetails } from '@utils/types';
import { SocialMedia } from '@utils/types';
interface Props {
  link: string;
  alt_text: string;
  image_file: string;
}

function SocialIcon({ alt_text, image_file, link }: Props): JSX.Element {
  return (
    <a href={link}>
      <img
        src={image_file}
        alt={alt_text}
        className="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75"
      />
    </a>
  );
}

export default function SocialBar(): JSX.Element {
  // const { socialMedia }: PersonalDetails = useContext(PersonalDetailsContext);
  const socialMedia: SocialMedia[] = [
    {
      link: '#',
      image_file: 'https://via.placeholder.com/24?text=Twitter',
      alt_text: 'Twitter'
    },
    {
      link: '#',
      image_file: 'https://via.placeholder.com/24?text=LinkedIn',
      alt_text: 'LinkedIn'
    },
    {
      link: '#',
      image_file: 'https://via.placeholder.com/24?text=GitHub',
      alt_text: 'GitHub'
    },
    {
      link: '#',
      image_file: 'https://via.placeholder.com/24?text=Instagram',
      alt_text: 'Instagram'
    }
  ];

  return (
    <div className="fixed left-3 md:left-5 bottom-0 z-30">
      <div className="flex flex-col  justify-center items-center ">
        {socialMedia.map((item) => {
          return (
            <SocialIcon
              link={item.link}
              image_file={item.image_file}
              alt_text={item.alt_text}
              key={item.image_file}
            />
          );
        })}
        <div className="h-20 md:h-32 mt-2 w-1/12 bg-violet" />
      </div>
    </div>
  );
}
