import type { Brands, Course, Job, PDF_JOB, Stack } from '$lib/types';

export const PERSONAL_INFO = {
  name: 'Matias Ferraro',
  job: 'Frontend Web Developer',
  mail: 'matias.agf@gmail.com',
  phone: '+39 348 113 3761',
  portfolio: 'https://matiasferraro.com.ar',
  place: 'Living in Italy 🇮🇹',
  PDFplace: 'Living in Italy',
  province: 'Province Asti, Piedmont',
  summary:
    "I'm a Frontend Developer with 3 years of experience, I'm passionate about web development and I'm always looking to develop better and better applications. I work with the latest tools to provide the best user experience. I focus on performance, clean code and best practices."
};

export const JOB_EXPERIENCE: Job[] = [
  {
    title: 'Frontend Web Developer',
    company: 'Freelance',
    startDate: 'May.2021',
    endDate: 'Present',
    description:
      "I'm working as a freelance developer, I'm working with different clients, I'm developing their websites and apps using ReactJS, NextJS, VueJS, Svelte, TailwindCSS, ChakraUI, among others. ",
    responsabilities: [
      {
        description: 'I work hard to deliver the best quality to my clients'
      }
    ]
  },
  {
    title: 'Frontend Web Developer',
    company: 'Steplix',
    startDate: 'Ago.2022',
    endDate: 'Feb.2023',
    description:
      'I was responsible for the development of the frontend using NextJS framework & React library, for state management I used Redux, also I used TailwindCSS for the styles',
    responsabilities: [
      {
        description: 'Developing and maintaining the frontend of the company'
      },
      {
        description: 'Working with NextJS, React, VueJS, TypeScript, TailwindCSS'
      },
      {
        description:
          'Working with the team in Scrum Methodology to improve the code quality and the performance of the apps'
      }
    ]
  },

  {
    title: 'Frontend Web Developer',
    company: 'CoreBiz',
    startDate: 'Sept.2021',
    endDate: 'Jul.2022',
    description:
      'I was responsible for the development of e-commerce apps using vtex, platform, also develop custom apps for the platform using react',
    responsabilities: [
      {
        description: 'Developing and maintaining the frontend of the company'
      },
      {
        description: 'Working with ReactJS, VTEXIO'
      },
      {
        description: 'Developing e-commerce apps also improve the performance of the existing ones'
      }
    ]
  }
];

export const JOB: Job = {
  title: 'Frontend Web Developer',
  company: 'Steplix',
  startDate: 'Ago - 2022',
  endDate: 'present',
  responsabilities: [
    {
      description: 'Developing and maintaining the frontend of the company'
    },
    {
      description: 'Working with NextJS, React, VueJS, TypeScript, TailwindCSS'
    },
    {
      description:
        'Working with the team in Scrum Methodology to improve the code quality and the performance of the apps'
    }
  ]
};

export const PDF_JOBS: PDF_JOB = {
  freelance: {
    title: 'Frontend Web Developer',
    company: 'Freelance',
    startDate: 'Feb.2023',
    endDate: 'Present',
    description:
      "I'm working as a freelance developer, I'm working with different clients, I'm developing their websites and apps using ReactJS, NextJS, VueJS, Svelte, TailwindCSS, ChakraUI, among others. ",
    responsabilities: [
      {
        description: 'I work hard to deliver the best quality to my clients'
      }
    ]
  },
  steplix: {
    title: 'Frontend Web Developer',
    company: 'Steplix',
    startDate: 'Ago.2022',
    endDate: 'Feb.2023',
    description:
      'I was responsible for the development of the frontend using NextJS framework & React library, for state management I used Redux, also I used TailwindCSS for the styles',
    responsabilities: [
      {
        description: 'Developing and maintaining the frontend of the company'
      },
      {
        description: 'Working with NextJS, React, VueJS, TypeScript, TailwindCSS'
      },
      {
        description:
          'Working with the team in Scrum Methodology to improve the code quality and the performance of the apps'
      }
    ]
  },

  corebiz: {
    title: 'Frontend Web Developer',
    company: 'CoreBiz',
    startDate: 'Sept.2021',
    endDate: 'Jul.2022',
    description:
      'I was responsible for the development of e-commerce apps using vtex, platform, also develop custom apps for the platform using react',
    responsabilities: [
      {
        description: 'Developing and maintaining the frontend of the company'
      },
      {
        description: 'Working with ReactJS, VTEXIO'
      },
      {
        description: 'Developing e-commerce apps also improve the performance of the existing ones'
      }
    ]
  }
};

export const SKILLS = ['Team working', 'Fast learning', 'Self motivated', 'Self time management'];

export const COURSES: Course[] = [
  {
    name: 'NextJs',
    institution: 'Udemy',
    year: '2021',
    description:
      'This course allows manage NextJs in a complex way. Building real apps on real context with real issues. Also I learned NextAuth, TypeScript, MongoDB, among others'
  },

  {
    name: 'ReactJS',
    institution: 'Udemy',
    year: '2020',
    description:
      'Cover the all ecosystem of React, including Redux, Hooks, ContextAPI, Design Patterns.'
  },

  {
    name: 'VueJS',
    institution: 'Udemy',
    year: '2022',
    description:
      'Brings tools to build and manage apps with VueJS, either apps builded in Vue 2. The course cover the enterily ecosystem of Vue: Store, Context, Composables, Hooks'
  },

  {
    name: 'Fullstack Web Development',
    institution: 'ACAMICA',
    year: '2019',
    description:
      'This course allows me to learn the basics of web development and logic, including HTML, CSS, JavaScript, NodeJS, Express, MongoDB, among others'
  }
];

export const PROJECTS = {
  inchequeable: {
    name: 'Inchequeable',
    href: 'https://inchequeable.com.ar',
    image: 'Blog1.webp'
  },
  teslo: {
    name: 'E-Commerce',
    href: 'https://teslo.vercel.app/',
    image: 'ecommerce1.webp'
  },
  windows: {
    name: 'Windows 11 Clone',
    href: 'https://matiasferraro.com.ar',
    image: 'Portfolio1.webp'
  },
  rps: {
    name: 'Rock Paper Scissors',
    href: 'https://rps-mferraro.vercel.app/',
    image: 'svelte3.webp'
  },
  maps: {
    name: 'Maps',
    href: 'https://maps-mferraro.vercel.app/',
    image: 'vue-ts1.webp'
  }
};

export const BRANDS_NAMES = [
  'next',
  'chakra',
  'mongo',
  'material',
  'react',
  'sass',
  'svelte',
  'vue',
  'factory',
  'strategy',
  'vitest',
  'typescript',
  'tailwind',
  'node',
  'express',
  'redux',
  'jest',
  'cypress',
  'storybook',
  'graphql',
  'apollo',
  'prisma',
  'firebase',
  'vercel',
  'netlify',
  'heroku',
  'aws',
  'docker',
  'git',
  'github',
  'gitlab',
  'bitbucket',
  'vscode',
  'vim',
  'linux',
  'windows',
  'vtex',
  'cloudinary',
  'mapbox',
  'nextauth',
  'jwt'
] as const;

export const BRANDS: Partial<Brands> = {
  next: {
    color: 'text-next bg-white px-2',
    name: 'NextJS'
  },
  chakra: {
    color: 'text-chakra',
    name: 'ChakraUI'
  },
  mongo: {
    color: 'text-mongo',
    name: 'MongoDB'
  },
  material: {
    color: 'text-material',
    name: 'MaterialUI'
  },
  react: {
    color: 'text-react',
    name: 'React'
  },

  sass: {
    color: 'text-sass',
    name: 'SASS'
  },

  svelte: {
    color: 'text-svelte',
    name: 'Svelte'
  },

  vue: {
    color: 'text-vue',
    name: 'Vue'
  },

  factory: {
    color: 'text-factory',
    name: 'Factory'
  },

  strategy: {
    color: 'text-strategy',
    name: 'Strategy'
  },

  vitest: {
    color: 'text-vitest',
    name: 'Vitest'
  },

  typescript: {
    color: 'text-typescript',
    name: 'Typescript'
  },

  redux: {
    color: 'text-redux',
    name: 'Redux'
  },

  express: {
    color: 'text-express bg-white px-2',
    name: 'Express'
  },

  node: {
    color: 'text-node',
    name: 'Node'
  },

  vtex: {
    color: 'text-vtex',
    name: 'VTEX'
  },

  tailwind: {
    color: 'text-tailwind',
    name: 'TailwindCSS'
  },
  cloudinary: {
    color: 'text-cloudinary',
    name: 'Cloudinary'
  },
  mapbox: {
    color: 'text-mapbox',
    name: 'MapBox'
  },
  nextauth: {
    color: 'text-nextauth',
    name: 'NextAuth'
  },
  jwt: {
    color: 'text-jwt',
    name: 'JWT'
  }
};

export const FRONTEND: Stack[] = [
  {
    name: 'React',
    icon: 'react'
  },
  {
    name: 'Svelte',
    icon: 'svelte'
  },
  {
    name: 'Vue',
    icon: 'vue'
  }
];

export const REACT_FRAMEWORKS: Stack[] = [
  {
    name: 'NextJS',
    icon: 'next'
  }
];

export const STYLES: Stack[] = [
  {
    name: 'SASS',
    icon: 'sass'
  },
  {
    name: 'Tailwind',
    icon: 'tailwind'
  }
];

export const REACT_COMPONENTS: Stack[] = [
  {
    name: 'MaterialUI',
    icon: 'mui'
  }
];

export const BACKEND: Stack[] = [
  {
    name: 'MongoDB',
    icon: 'mongo'
  },
  {
    name: 'Express',
    icon: 'express'
  }
];

export const PROGRAMMING_LANGUAGES: Stack[] = [
  {
    name: 'JavaScript',
    icon: 'js'
  },
  {
    name: 'TypeScript',
    icon: 'ts'
  }
];

export const STACK = {
  Languages: PROGRAMMING_LANGUAGES,
  Frontend: FRONTEND,
  Frameworks: REACT_FRAMEWORKS,
  Components: REACT_COMPONENTS,
  Styles: STYLES,
  Backend: BACKEND
};

export const PDF_STACK: Stack[] = [
  {
    name: 'React',
    icon: 'react'
  },
  {
    name: 'Svelte',
    icon: 'svelte'
  },
  {
    name: 'Vue',
    icon: 'vue'
  },
  {
    name: 'NextJS',
    icon: 'next'
  },
  {
    name: 'SASS',
    icon: 'sass'
  },
  {
    name: 'MaterialUI',
    icon: 'mui'
  },
  {
    name: 'MongoDB',
    icon: 'mongo'
  },
  {
    name: 'Express',
    icon: 'express'
  },
  {
    name: 'JavaScript',
    icon: 'js'
  },
  {
    name: 'TypeScript',
    icon: 'ts'
  }
];
