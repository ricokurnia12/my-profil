import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import TextCards from 'shared/components/text-cards';
import { Button, HeaderSmall, ProjectCard } from '@shared-components';
import { ProjectDetailsContext } from 'shared/utils/contexts';
import { Project } from 'shared/utils/types';

export default function Projects(): JSX.Element {
  const router = useRouter();
  // const projectDetails: Project[] = useContext(ProjectDetailsContext);
  const projectDetails: Project[] = [
    {
      slug: 'project-1',
      tagline: 'Revolutionizing Web Development',
      description:
        'A cutting-edge web application for modern businesses, designed to streamline workflows and enhance productivity.',
      img: 'https://via.placeholder.com/300?text=Project+1+Image',
      name: 'WebApp 360',
      tags: ['React', 'Node.js', 'JavaScript'],
      github: 'https://github.com/username/webapp-360',
      category: ['Web', 'Business'],
      featured: true,
      launch_video: 'https://www.youtube.com/watch?v=example1',
      url: 'https://www.webapp360.com'
    },
    {
      slug: 'project-2',
      tagline: 'Innovative UI/UX Designs',
      description:
        'A design-centric project aimed at creating user-friendly interfaces that provide seamless experiences across devices.',
      img: 'https://via.placeholder.com/300?text=Project+2+Image',
      name: 'Design Studio',
      tags: ['Figma', 'UI/UX', 'Design'],
      github: 'https://github.com/username/design-studio',
      category: ['Design', 'UI/UX'],
      featured: false,
      launch_video: 'https://www.youtube.com/watch?v=example2',
      url: 'https://www.designstudio.com'
    },
    {
      slug: 'project-3',
      tagline: 'Advanced E-Commerce Platform',
      description:
        'An e-commerce platform with advanced features, including product recommendations, secure payments, and analytics.',
      img: 'https://via.placeholder.com/300?text=Project+3+Image',
      name: 'ShopEase',
      tags: ['E-Commerce', 'Shopify', 'Payment Gateway'],
      github: 'https://github.com/username/shopease',
      category: ['E-Commerce', 'Web'],
      featured: true,
      launch_video: 'https://www.youtube.com/watch?v=example3',
      url: 'https://www.shopease.com'
    },
    {
      slug: 'project-4',
      tagline: 'Real-time Data Analytics',
      description:
        'A data analytics platform for visualizing and analyzing large datasets in real-time, perfect for businesses and researchers.',
      img: 'https://via.placeholder.com/300?text=Project+4+Image',
      name: 'DataStream',
      tags: ['Data Analytics', 'Real-time', 'Visualization'],
      github: 'https://github.com/username/datastream',
      category: ['Data Science', 'Analytics'],
      featured: false,
      launch_video: 'https://www.youtube.com/watch?v=example4',
      url: 'https://www.datastream.com'
    }
  ];

  return (
    <>
      <div>
        <div className="relative h-auto py-10 lg:py-20">
          <img
            src="/images/vectors/heart.svg"
            alt="Circle Vector"
            className="absolute -right-50p md:-right-96 bottom-16 md:-bottom-20 pointer-events-none animate-pulse"
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
                <HeaderSmall text="Let’s walk the talk!" />
                {/* TODO Add dynamic taglines */}

                <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                  Some awesome <span className="text-pink font-bold">products</span> for the awesome
                  poeple
                </h1>
                <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                  Something he has <span className="text-pink font-bold">built.</span>
                </h1>
                <div className="sm:ml-52 xl:ml-96 transform rotate-90">
                  <Link href="#projects">
                    <img
                      src="/images/vectors/arrows-right.svg"
                      alt="Next"
                      className="hidden lg:block w-14 lg:mt-24 xl:mt-16 sm:mt-0 transform-all animate-translateright "
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* FIXME Make thie cards of this page dyanmic */}
            <div className="relative col-span-12 md:col-span-5 lg:col-span-6 flex flex-col">
              <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
                <TextCards
                  heading="Websites"
                  text=" He adds certain special hidden recipes and making his websites look enticing."
                  color="violet"
                />
              </div>
              <div className="w-64 h-auto my-4 sm:ml-40 sm:-my-6 lg:ml-60 lg:-my-10 shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 z-auto">
                <TextCards
                  heading="Apps"
                  text="The art of creating some awesome smartphone applications using React Native."
                  color="pink"
                />
              </div>
              <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
                <TextCards
                  heading="UI/UX"
                  text="He uses his outstanding engineering abilities to provide users an awesome interface and experience"
                  color="violet"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-auto sm:h-auto md:h-auto ml-4 sm:mx-12 md:mx-16" id="projects">
          <div className="grid md:grid-cols-2 gap-4 place-items-center">
            {projectDetails.map((project: Project) => (
              <ProjectCard
                project={project}
                key={project.slug}
                filter={{ key: 'featured', value: true }}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10 lg:mt-4">
            <Button
              type="solid"
              text="Show me more! 🔥"
              onClickHandler={() => router.push('/projects')}
            />
          </div>
        </div>
      </div>
    </>
  );
}
