<script lang="ts">
  import { accordions, updateAccordion } from '$lib/store/window';
  import type { Accordion, Stack } from '$lib/types';
  import { slide } from 'svelte/transition';
  import Icon from '../Icons/Icon.svelte';
  export let entry: [string, Stack[]];

  const iconsStyles = 'w-16';

  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);

  accordions.update((accordions) => {
    accordions.push({ isOpen: false, title: entry[0], entries: entry[1] });
    return accordions;
  });
  let data: Accordion;

  const accor = $accordions.find((accordion) => accordion.title === entry[0]);
  if (accor) data = accor;
</script>

<button
  class="font-fira glow"
  on:click={() => updateAccordion(data?.title, !data?.isOpen)}
  on:click={toggle}
  aria-expanded={isOpen}
>
  <svg
    style="tran"
    width="20"
    height="20"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke="#FFF"
  >
    <path d="M9 5l7 7-7 7" />
  </svg>
  <span class="text-white text-2xl sm:text-4xl">{entry[0]}</span>
</button>
{#if data.isOpen}
  <ul class="flex gap-8 ml-10" transition:slide={{ duration: 300 }}>
    {#each data.entries as { icon, name }}
      <li>
        <Icon {icon} {iconsStyles} />
      </li>
    {/each}
  </ul>
{/if}

<style>
  button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    gap: 0.5em;
    color: inherit;
    font-size: 36px;
    cursor: pointer;
    margin: 0;
    padding-bottom: 0.5em;
    padding-top: 0.5em;
  }

  svg {
    transition: transform 0.2s ease-in;
  }

  [aria-expanded='true'] svg {
    transform: rotate(90deg);
  }
</style>
