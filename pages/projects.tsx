import { getPersonalDetails, getProjectDetails } from '@utils/apiService';
import { PersonalDetailsContext, ProjectDetailsContext } from '@utils/contexts';
import { PersonalDetails, Project } from '@utils/types';
import { Footer, Navbar, SocialBar } from '@shared-components';

type Props = {
  personalDetails: PersonalDetails;
  projectDetails: Project[];
};

const Projects = ({ personalDetails, projectDetails }: Props): JSX.Element => {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <ProjectDetailsContext.Provider value={projectDetails}>
          <Navbar />
          {/* <ProjectsPage /> */}
          <SocialBar />
          <Footer />
        </ProjectDetailsContext.Provider>
      </PersonalDetailsContext.Provider>
    </>
  );
};
export default Projects;

export async function getStaticProps(): Promise<{
  props: { personalDetails: PersonalDetails; projectDetails: Project[] };
}> {
  const personalDetails = (await getPersonalDetails()) as PersonalDetails;
  const projectDetails = (await getProjectDetails()) as Project[];
  return { props: { personalDetails, projectDetails } };
}
