import { HeaderSmall } from '@shared-components';
import Link from 'next/link';
// import { useContext } from 'react';
// import { PersonalDetailsContext } from 'shared/utils/contexts';
// import { PersonalDetails } from 'shared/utils/types';

export default function Work(): JSX.Element {
  // const personalDetails: PersonalDetails = useContext(PersonalDetailsContext);
  // const personalDetails: PersonalDetails = {
  //   name: 'John Doe',
  //   logo: 'https://via.placeholder.com/150?text=Company+Logo',
  //   about:
  //     'A passionate web developer with 5+ years of experience in building modern web applications.',
  //   socialMedia: [
  //     {
  //       link: 'https://twitter.com/johndoe',
  //       image_file: 'https://via.placeholder.com/24?text=Twitter',
  //       alt_text: 'Twitter'
  //     },
  //     {
  //       link: 'https://linkedin.com/in/johndoe',
  //       image_file: 'https://via.placeholder.com/24?text=LinkedIn',
  //       alt_text: 'LinkedIn'
  //     }
  //   ],
  //   work: {
  //     company: 'Tech Solutions Inc.',

  //     logo: 'https://via.placeholder.com/150?text=Tech+Solutions+Inc.',
  //     designation: 'Senior Web Developer'
  //   },
  //   resume: 'https://example.com/johndoe-resume.pdf',
  //   profile_img: 'https://via.placeholder.com/150?text=Profile+Image',
  //   calendyUrl: 'https://calendly.com/johndoe'
  // };
  return (
    <>
      <div className="relative h-auto py-10 lg:py-20">
        <img
          src="/images/vectors/circle-spin.svg"
          alt="Circle Vector"
          className="absolute -right-16 md:-right-64 top-52 md:top-0 lg:bottom-36 w-1/3 2xl:w-1/3 pointer-events-none animate-spin"
        />
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-3/4 relative">
              <img
                src="/images/vectors/boxes.svg"
                alt="Box Vector"
                className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
              />
              <HeaderSmall text="What does he do?" />
              <h1 className="mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                Designing and building dynamic web solutions that drive the success of their
                educational platform. He is currently working at Ganesha Operation as a
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none">
                Fullstack Web Developer
              </h1>

              <div className="sm:ml-52 xl:ml-96">
                <Link href="#work">
                  <img
                    src="/images/vectors/arrows-right.svg"
                    alt="Next"
                    className="w-14 mt-10 sm:mt-0 transform-all animate-translateright"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12  md:col-span-5 lg:col-span-6 flex flex-col items-center justify-center">
            <img src="images/me2.jpg" alt="Works at" className="w-48 lg:w-2/4 rounded-3xl" />
          </div>
        </div>
      </div>
    </>
  );
}
