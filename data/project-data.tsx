const projectData = [
  {
    name: 'GO Karir',
    url: 'https://career.ganeshaoperation.com/',
    tech: {
      frontend: ['ReactJs', 'NextJs', 'TailwindCss'],
      backend: ['NodeJs', 'NestJs'],
      server: ['Nginx'],
      database: ['PostgreSql']
    },
    image: [
      {
        path: '/project/go-career/go-career.png',
        description: 'GO Career landing page'
      },
      {
        path: '/project/go-career/list-job.png',
        description: 'Available job listings page'
      },
      {
        path: '/project/go-career/progress-admin.png',
        description: 'Applicant details and interview schedule'
      },
      {
        path: '/project/go-career/log-activity.png',
        description: 'Admin activity log page'
      },
      {
        path: '/project/go-career/add-loker.png',
        description: 'Job posting CMS form'
      }
    ],
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
    url: 'https://ganeshaoperation.com/teasergo/',
    tech: {
      frontend: ['ReactJs', 'TailwindCss'],
      backend: ['PHP', 'Laravel'],
      server: ['Nginx'],
      database: ['mySql']
    },
    image: [
      {
        path: '/project/teaser-go/landing.png',
        description: 'Landing page for user introduction and registration'
      },
      {
        path: '/project/teaser-go/exam.png',
        description: 'Exam interface showing multiple choice questions'
      },
      {
        path: '/project/teaser-go/explain.png',
        description: 'Explanation page displaying correct answers with reasoning'
      },
      {
        path: '/project/teaser-go/result.png',
        description: 'Result page summarizing user performance and scores'
      }
    ],
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
    url: 'https://dev-web.ganeshaoperation.com',
    tech: {
      frontend: ['NextJs', 'TailwindCss'],
      backend: ['NodeJs', 'ExpressJs'],
      server: ['Nginx'],
      database: ['MongoDb']
    },
    image: [
      {
        path: '/project/go/landing.png',
        description: 'Landing page for user introduction and registration'
      },
      {
        path: '/project/go/list-produk.png',
        description: 'Exam interface showing multiple choice questions'
      },
      {
        path: '/project/go/register.png',
        description: 'Explanation page displaying correct answers with reasoning'
      },
      {
        path: '/project/go/payment.png',
        description: 'Result page summarizing user performance and scores'
      },
      {
        path: '/project/go/dashboard.png',
        description: 'Result page summarizing user performance and scores'
      },
      {
        path: '/project/go/addproduct.png',
        description: 'Result page summarizing user performance and scores'
      },
      {
        path: '/project/go/user-manajemen.png',
        description: 'Result page summarizing user performance and scores'
      }
    ],
    description: (
      <>
        <p>
          <strong>Official Web Ganesha Operation</strong> is the main public-facing website for
          Ganesha Operation, providing comprehensive information about the institution, including
          product offerings, educational articles, news updates, and more.
        </p>
        <p>
          The site supports product sales, blog publishing, and dynamic content management, enabling
          the internal team to manage content without developer assistance.
        </p>
        <p>
          Built with NextJs and TailwindCSS for the frontend, and powered by NodeJs and ExpressJs on
          the backend, this platform ensures scalability, flexibility, and ease of maintenance.
        </p>
      </>
    )
  },
  {
    name: 'WA Blast Service',
    tech: {
      frontend: ['NextJs', 'TailwindCss'],
      backend: ['NodeJs', 'ExpressJs', 'wwebjs'],
      server: ['Nginx'],
      database: ['PostgreSql', 'Redis']
    },
    image: [
      {
        path: '/project/wablast/dashboard.png',
        description: 'Dashboard for monitoring WhatsApp sessions'
      },
      {
        path: '/project/wablast/login.png',
        description: 'QR Code login screen'
      },
      {
        path: '/project/wablast/champaign.png',
        description: 'Form for sending blast messages to multiple recipients'
      },
      {
        path: '/project/wablast/contact.png',
        description: 'Real-time message delivery logs'
      },
      {
        path: '/project/wablast/templata-message.png',
        description: 'Real-time message delivery logs'
      }
    ],
    description: (
      <>
        <p>
          <strong>WA Blast Service</strong> is a WhatsApp messaging platform built using
          <strong> wwebjs</strong> with a multi-session architecture. Each user can log in via QR
          Code, and every session operates independently without interfering with others.
        </p>
        <p>
          The backend is powered by NodeJs and Express, with Redis used for persistent session
          storage. The system supports high-volume message broadcasting, includes a reliable queuing
          mechanism, and allows sending documents, images, and template messages.
        </p>
        <p>
          This platform is designed for marketing campaigns, payment reminders, automated
          notifications, and other message distribution needs.
        </p>
      </>
    )
  },
  {
    name: 'WonderPalembang',
    url: 'http://wonderpalembang.site/',
    tech: {
      frontend: ['NextJs', 'TailwindCss'],
      backend: ['Golang', 'Echo / Fiber'],
      server: ['Nginx'],
      database: ['PostgreSql']
    },
    image: [
      {
        path: '/project/wonderpalembang/home.png',
        description: 'Landing page showcasing Palembang tourism highlights'
      },
      {
        path: '/project/wonderpalembang/event.png',
        description: 'Upcoming cultural and city events listing'
      },
      {
        path: '/project/wonderpalembang/detailblog.png',
        description: 'Directory of popular attractions and destinations'
      },
      {
        path: '/project/wonderpalembang/hotels.png',
        description: ''
      }
    ],
    description: (
      <>
        <p>
          <strong>WonderPalembang</strong> is a tourism platform designed to promote the beauty,
          culture, and experiences of Palembang. It features curated destinations, upcoming events,
          and a cultural guide that helps visitors learn about local traditions.
        </p>
        <p>
          The frontend is built with NextJs and TailwindCSS for fast navigation and a modern UI,
          while the backend is powered by Golang to ensure high performance and efficient data
          processing. All data is stored securely in PostgreSQL and served through Nginx.
        </p>
        <p>
          WonderPalembang aims to provide both tourists and locals with a seamless way to explore
          attractions, discover events, and appreciate Palembang’s cultural richness.
        </p>
      </>
    )
  }
];

export default projectData;
