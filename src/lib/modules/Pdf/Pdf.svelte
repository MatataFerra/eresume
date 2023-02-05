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

<section class="pdf-container bg-black shadow-resume w-full" bind:this={html}>
  <article class="flex gap-4 px-4 w-3/4">
    <div class="flex flex-col gap-2">
      <Lines limit={120} />
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
        <section class="flex flex-col gap-4 mb-4">
          <PdfSummary />
          <PdfWork />
        </section>
      </div>
      <section class="px-4 mb-4">
        <PdfAside />
      </section>
      <section class="px-4 mt-4 ">
        <Title customSlash="text-2xl">
          <span class="text-2xl" slot="title">stack</span>
        </Title>

        <div class="grid grid-cols-1 gap-4 mt-4">
          <div class="flex gap-4">
            <div>
              <h3 class="text-xl text-white font-bold">Programming Languages</h3>
              <hr class="h-px my-4 bg-gray border-0" />
            </div>
            <div class="flex gap-4 items-center">
              <img class="w-10" src="/img/stack/js-cv.png" alt="JS Icon" />
              <img class="w-10" src="/img/stack/ts-cv.png" alt="TS Icon" />
            </div>
          </div>

          <div class="flex gap-4">
            <div>
              <h3 class="text-xl text-white font-bold">Styles</h3>
              <hr class="h-px my-4 bg-gray border-0" />
            </div>
            <div class="flex gap-4 items-center">
              <img class="w-10" src="/img/stack/tailwind-cv.png" alt="Tailwind Icon" />
              <img class="w-10" src="/img/stack/sass-cv.png" alt="SASS Icon" />
            </div>
          </div>

          <div class="flex gap-4">
            <div>
              <h3 class="text-xl text-white font-bold">Frameworks</h3>
              <hr class="h-px my-4 bg-gray border-0" />
            </div>
            <div class="flex gap-4 items-center">
              <img class="w-10" src="/img/stack/react-cv.png" alt="React Icon" />
              <img class="w-10" src="/img/stack/vue-cv.png" alt="Vue Icon" />
              <img class="w-10" src="/img/stack/svelte-cv.png" alt="Svelte Icon" />
            </div>
          </div>

          <div class="flex gap-4">
            <div>
              <h3 class="text-xl text-white font-bold">UI Libraries</h3>
              <hr class="h-px my-4 bg-gray border-0" />
            </div>
            <div class="flex gap-4 items-center">
              <img class="w-10" src="/img/stack/mui-cv.png" alt="Material Icon" />
            </div>
          </div>

          <div class="flex gap-4">
            <div>
              <h3 class="text-xl text-white font-bold">React Frameworks</h3>
              <hr class="h-px my-4 bg-gray border-0" />
            </div>
            <div class="flex gap-4 items-center">
              <img class="w-16" src="/img/stack/next-cv.png" alt="NextJS Icon" />
            </div>
          </div>

          <div class="flex gap-4">
            <div>
              <h3 class="text-xl text-white font-bold">Backend</h3>
              <hr class="h-px my-4 bg-gray border-0" />
            </div>
            <div class="flex gap-4 items-center">
              <img class="w-10" src="/img/stack/express-cv.png" alt="Express Icon" />
              <img class="w-10" src="/img/stack/mongodb-cv.png" alt="Mongo Icon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </article>
</section>
