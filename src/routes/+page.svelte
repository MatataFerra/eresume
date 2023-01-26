<script lang="ts">
  import Lines from '$lib/components/Lines/Lines.svelte';
  import Body from '$lib/modules/Body.svelte';
  import Navbar from '$lib/modules/Navbar/Navbar.svelte';
  import Pdf from '$lib/modules/Pdf/Pdf.svelte';
  import { numberOfLines, cvHeight } from '$lib/store/window';
  import { watchResize } from 'svelte-watch-resize';

  function handleLinesResize() {
    const updateLines = $cvHeight / 20;
    numberOfLines.set(Math.round(updateLines));
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="e-Resume Matias Ferraro" />
</svelte:head>

<section class="bg-black container-resume shadow-resume overflow-y-scroll scroll-smooth">
  <article class="flex gap-4 p-4">
    <div class="flex flex-col gap-1" use:watchResize={handleLinesResize}>
      <Lines limit={$numberOfLines} />
    </div>
    <div class="flex flex-col">
      <Navbar />
      <Body />
    </div>
  </article>

  <div class="bg-black">
    <Pdf />
  </div>
  <!-- {#if show}
  {/if} -->
</section>
