import type * as Icon from '$lib/components/Icons/Stack';

export type Item = {
  description: string;
};

export type Job = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
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

export type Brand =
  | 'next'
  | 'chakra'
  | 'mongo'
  | 'material'
  | 'react'
  | 'sass'
  | 'svelte'
  | 'vue'
  | 'factory'
  | 'strategy'
  | 'vitest'
  | 'typescript'
  | 'tailwind'
  | 'node'
  | 'express'
  | 'redux';

export type Brands = {
  [key: string]: {
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
