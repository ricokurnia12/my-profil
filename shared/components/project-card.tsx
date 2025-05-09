/* eslint-disable react/require-default-props */
import { Project } from '@utils/types';
import Link from 'next/link';
import Tilt from 'react-tilt';

type Props = {
  project: Project;
  filter?: {
    key: string;
    value: string | boolean;
  };
};
const ProjectCard = ({ project, filter }: Props): JSX.Element => {
  let show = false;
  if (typeof project[filter.key] !== 'object' && project[filter.key] === filter.value) {
    show = true;
  } else if (
    (Object.prototype.toString.call(project[filter.key]) === '[object Array]' &&
      project[filter.key].includes(filter.value)) ||
    filter.value === 'all'
  ) {
    show = true;
  }
  return (
    show && (
      <>
        <Tilt className="Tilt cursor-pointer" options={{ max: 25 }}>
          <div
            className="relative my-4 mx-8 lg:mx-16 rounded-2xl overflow-hidden
          transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl">
            <Link href={`/project/${project.slug}`}>
              <img
                src={project.img}
                alt={project.name}
                className="rounded-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Klik untuk melihat detail</span>
              </div>
            </Link>
          </div>
        </Tilt>
      </>
    )
  );
};

export default ProjectCard;
