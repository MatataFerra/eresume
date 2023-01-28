import type { Brands, Course, Job, Stack } from '$lib/types';

export const PERSONAL_INFO = {
  name: 'Matias Ferraro',
  job: 'Frontend Web Developer',
  mail: 'matias.agf@gmail.com',
  phone: '+39 348 113 3761',
  portfolio: 'https://matiasferraro.com.ar',
  place: 'Living in Italy 🇮🇹',
  PDFplace: 'Living in Italy',
  province: 'Province Asti, Piedmont',
  summary: 'I am a Frontend Developer with 2 years of experience'
};

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

export const BRANDS: Brands = {
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
