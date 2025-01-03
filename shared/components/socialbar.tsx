import { SocialMedia } from '@utils/types';
// import { useContext } from 'react';
// import { PersonalDetailsContext } from '@utils/contexts';
// import { PersonalDetails } from '@utils/types';

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
      link: 'ricokurnia19@gmail.com',
      image_file: 'https://w7.pngwing.com/pngs/608/931/png-transparent-gmail-new-logo-icon.png',
      alt_text: 'Gmail'
    },
    {
      link: 'https://www.linkedin.com/in/rico-kurnia-289b07294/',
      image_file:
        'https://w7.pngwing.com/pngs/60/378/png-transparent-social-media-linkedin-computer-icons-logo-facebook-shelf-drum-blue-text-rectangle-thumbnail.png',
      alt_text: 'LinkedIn'
    },
    {
      link: 'https://github.com/ricokurnia12',
      image_file:
        'https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png',
      alt_text: 'GitHub'
    }
    // {
    //   link: '#',
    //   image_file: 'https://via.placeholder.com/24?text=Instagram',
    //   alt_text: 'Instagram'
    // }
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
