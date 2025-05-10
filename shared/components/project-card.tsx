/* eslint-disable react/require-default-props */
import { ProjectData } from 'interface/project-data';
import Link from 'next/link';
import Tilt from 'react-tilt';

type Props = {
  project: ProjectData;
};

const ProjectCard = ({ project }: Props): JSX.Element | null => {
  const imagePath = project.image?.[0]?.path;

  return (
    <Tilt className="Tilt cursor-pointer" options={{ max: 25 }}>
      <div
        className="relative my-4 mx-8 lg:mx-16 rounded-2xl overflow-hidden
        transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl">
        <Link href={`/project/${project.name.toLocaleLowerCase()}`}>
          <img
            src={imagePath}
            alt={project.name}
            className="rounded-2xl w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <span className="text-white text-lg font-semibold">Klik untuk melihat detail</span>
          </div>
        </Link>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
