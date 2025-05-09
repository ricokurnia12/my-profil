const projectData = [
  {
    name: 'GO Karir',
    tech: {
      frontend: ['ReactJs', 'NextJs', 'TailwindCss'],
      backend: ['NodeJs', 'NestJs'],
      server: ['Nginx'],
      database: ['PostgreSql']
    },
    description: (
      <>
        <p>
          <strong>GO Karir</strong> is an internal job portal platform developed specifically for
          the recruitment needs of Ganesha Operation. This application streamlines the entire hiring
          process— from initial application and online assessments, all the way to digital signing
          of a fixed-term employment contract (PKWT).
        </p>
        <p>
          Built using ReactJs and NextJs on the frontend, and NodeJs and NestJs on the backend, it
          ensures a fast, secure, and seamless user experience. Supported by PostgreSQL and served
          via Nginx.
        </p>
        <p>
          The platform simplifies recruitment, boosts HR efficiency, and ensures transparency—
          helping Ganesha Operation recruit the most qualified talent.
        </p>
      </>
    )
  },
  {
    name: 'Teaser GO',
    tech: {
      frontend: ['ReactJs', 'TailwindCss'],
      backend: ['PHP', 'Laravel'],
      server: ['Nginx'],
      database: ['mySql']
    },
    description: (
      <>
        <p>
          <strong>Teaser GO</strong> is a trial-based teaser platform developed to simulate the
          problem-solving experience at Ganesha Operation. It allows users to try sample questions
          that reflect real assessments.
        </p>
        <p>
          Built with ReactJs on the frontend and Laravel (PHP) on the backend, with MySQL and Nginx,
          it delivers a responsive and stable experience.
        </p>
        <p>
          This tool serves as a preview and preparation platform for candidates before official
          assessments.
        </p>
      </>
    )
  },
  {
    name: 'Official Web Ganesha Operation',
    tech: {
      frontend: ['NextJs', 'TailwindCss'],
      backend: ['NodeJs', 'Strapi CMS'],
      server: ['Nginx'],
      database: ['PostgreSql']
    },
    description: (
      <>
        <p>
          <strong>Official Web Ganesha Operation</strong> is the main public-facing website for
          Ganesha Operation, providing comprehensive information about the institution, including
          product offerings, educational articles, news updates, and more.
        </p>
        <p>
          The site supports product sales, blog publishing, and dynamic content management through a
          powerful CMS (Strapi), enabling the internal team to manage content without developer
          assistance.
        </p>
        <p>
          Built with NextJs and TailwindCSS for the frontend, and powered by NodeJs and Strapi on
          the backend, this platform ensures scalability, flexibility, and ease of maintenance.
        </p>
      </>
    )
  }
];

export default { projectData };
