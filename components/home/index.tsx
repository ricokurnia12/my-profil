import Landing from './landing';
import Skills from './skills';
import Work from './work';
import Projects from './projects';
import TimelineExperience from 'components/experience';
// import RepoDetails from './repo';

// import WordCloud from './wordcloud';

const HomePage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Landing />
          <Skills />
          <Work />
          <TimelineExperience />
          {/* <WordCloud /> */}
          <Projects />
          {/* <Contact /> */}
          {/* <RepoDetails /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
