import type { Brands, Course, Job } from '$lib/types';

export const PERSONAL_INFO = {
  mail: 'matias.agf@gmail.com',
  phone: '+39 348 113 3761',
  portfolio: 'https://matiasferraro.com.ar',
  place: 'Living in Italy 🇮🇹',
  province: 'Province Asti, Piedmont'
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

export const SKILLS = ['Skill 1', 'Skill 2', 'Skill 3'];

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
  }
];

export const PROJECTS = {
  inchequeable: {
    name: 'Inchequeable',
    href: 'https://inchequeable.com.ar',
    image: 'Blog1.png'
  },
  teslo: {
    name: 'E-Commerce',
    href: 'https://teslo.vercel.app/',
    image: 'ecommerce1.png'
  },
  windows: {
    name: 'Windows 11 Clone',
    href: 'https://matiasferraro.com.ar',
    image: 'Portfolio1.png'
  },
  rps: {
    name: 'Rock Paper Scissors',
    href: 'https://rps-mferraro.vercel.app/',
    image: 'svelte3.png'
  },

  maps: {
    name: 'Maps',
    href: 'https://maps-mferraro.vercel.app/',
    image: 'vue-ts1.png'
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
