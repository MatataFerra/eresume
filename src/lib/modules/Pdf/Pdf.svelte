<script lang="ts">
  import Lines from '$lib/components/Lines/Lines.svelte';
  import PdfAside from '$lib/components/Pdf/PDF_Aside/PDFAside.svelte';
  import PdfContactInfo from '$lib/components/Pdf/PDF_Contact/PDFContactInfo.svelte';
  import PdfSummary from '$lib/components/Pdf/PDF_Summary/PdfSummary.svelte';
  import PdfWork from '$lib/components/Pdf/PDF_Work/PDFWork.svelte';
  import Header from '$lib/components/Title/Header.svelte';
  import Name from '$lib/components/Title/Name.svelte';
  import { pdf } from '$lib/store/pdf';
  import { tick } from 'svelte';
  import Title from '$lib/components/Title/Title.svelte';

  let html: HTMLElement | null;

  tick().then(() => {
    html && pdf.set(html);
  });
</script>

<section class="pdf-container shadow-resume w-full" bind:this={html}>
  <article class="flex gap-4 px-4 w-3/4">
    <div class="flex flex-col gap-2">
      <Lines limit={72} />
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col gap-4 px-4">
        <section class="flex justify-between">
          <div class="flex flex-col gap-4">
            <Header>cv</Header>
            <Name sizes={{ name: 'text-2xl', job: 'text-sm' }} />
          </div>
          <PdfContactInfo />
        </section>
        <section class="flex flex-col gap-4">
          <PdfSummary />
          <PdfWork />
        </section>
      </div>
      <section class="px-4">
        <PdfAside />
      </section>
      <section class="px-4 mt-4 ">
        <Title customSlash="text-2xl">
          <span class="text-2xl" slot="title">stack</span>
        </Title>

        <div class="flex gap-4 mt-4">
          <img class="w-16" src="/img/stack/react-cv.png" alt="React Icon" />
          <!-- <img class="w-16" src="/img/stack/vue-cv.png" alt="Vue Icon" /> -->
        </div>
      </section>
    </div>
  </article>
</section>
