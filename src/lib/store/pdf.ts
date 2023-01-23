import { writable } from 'svelte/store';

export const pdf = writable<HTMLElement>(undefined);
export const header = writable<HTMLElement>(undefined);
export const body = writable<HTMLElement>(undefined);
export const summary = writable<HTMLElement>(undefined);
