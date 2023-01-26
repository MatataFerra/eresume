<script lang="ts">
  import Accordion from '$lib/components/Accordion/Accordion.svelte';
  import Title from '$lib/components/Title/Title.svelte';
  import { STACK } from '$lib/utils/constants';
</script>

<section>
  <Title><span slot="title">stack</span></Title>
  {#each Object.entries(STACK) as entry}
    <Accordion {entry} />
  {/each}
</section>
