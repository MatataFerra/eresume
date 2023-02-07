<script>
  import Navbar from '$lib/modules/Navbar/Navbar.svelte';
  import Pdf from '$lib/modules/Pdf/Pdf.svelte';
  import { METHODS_NAVBAR } from '$lib/utils/constants';
</script>

<section class="bg-black container-resume shadow-resume overflow-y-scroll scroll-smooth">
  <article class="w-3/4 bg-black">
    <Navbar method={METHODS_NAVBAR.pdf} />
    <Pdf />
  </article>
</section>

<style scoped>
  article {
    margin: 0 auto;
  }
</style>
