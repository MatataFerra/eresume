<script lang="ts">
  import Lines from '$lib/components/Lines/Lines.svelte';
  import Body from '$lib/modules/Body.svelte';
  import Navbar from '$lib/modules/Navbar/Navbar.svelte';
  import Pdf from '$lib/modules/Pdf/Pdf.svelte';

  let show = true;

  setTimeout(() => {
    show = false;
  }, 1000);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="e-Resume Matias Ferraro" />
</svelte:head>

<section class="bg-black container-resume shadow-resume overflow-y-scroll scroll-smooth">
  <article class="flex gap-4 p-4">
    <div class="flex flex-col gap-1">
      <Lines />
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
