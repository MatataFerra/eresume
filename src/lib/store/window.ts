import type { Accordion } from '$lib/types';
import { writable } from 'svelte/store';

export const numberOfLines = writable(236);
export const cvHeight = writable(0);
export const accordions = writable<Accordion[]>([]);
export const updateAccordion = (accordionName: string, isOpen: boolean) => {
  accordions.update((accordions) => {
    const accordionIndex = accordions.findIndex((accordion) => accordion.title === accordionName);
    if (accordionIndex === -1) return accordions;
    accordions[accordionIndex].isOpen = isOpen;
    return accordions;
  });
};
