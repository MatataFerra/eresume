import type * as Icon from '$lib/components/Icons/Stack';
import type { BRANDS_NAMES } from '../utils/constants';

export type Method = 'pdf' | 'navigate' | 'download';
export type Screen = 'home' | 'pdf';

export type Item = {
  description: string;
};

export type Job = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description?: string;
  responsabilities: Item[];
};

export type Course = {
  name: string;
  institution: string;
  year: string;
  description: string;
};

export type Project = {
  name: string;
  href: string;
  image: string;
};

export type Brand = (typeof BRANDS_NAMES)[number];

export type Brands = {
  [key in Brand]: {
    color: string;
    name: string;
  };
};

export type Stack = {
  name: string;
  icon: keyof typeof Icon;
};

export type Accordion = {
  isOpen: boolean;
  title: string;
  entries: Stack[];
};

export type PDF_JOB = {
  freelance: Job;
  steplix: Job;
  corebiz: Job;
};
