<script lang="ts">
  import Lines from '$lib/components/Lines/Lines.svelte';
  import DotsLoader from '$lib/components/Loaders/DotsLoader.svelte';
  import Body from '$lib/modules/Body.svelte';
  import Navbar from '$lib/modules/Navbar/Navbar.svelte';
  import { numberOfLines, cvHeight } from '$lib/store/';

  $: $numberOfLines = Math.floor(($cvHeight + 8) / 20);

  let show = true;
  $: setTimeout(() => {
    show = false;
  }, 1500);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="e-Resume Matias Ferraro" />
</svelte:head>

<section class="bg-black container-resume shadow-resume overflow-y-scroll scroll-smooth">
  {#if show}<DotsLoader />{/if}
  <article class="flex gap-4 p-4">
    <div class="flex flex-col gap-1">
      <Lines limit={$numberOfLines} />
    </div>
    <div class="flex flex-col">
      <Navbar method={'download'} />
      <Body />
    </div>
  </article>
</section>
