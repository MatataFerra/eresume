<script lang="ts">
  import ContactInfo from '$lib/components/ContactInfo/ContactInfo.svelte';
  import Lines from '$lib/components/Lines/Lines.svelte';
  import Header from '$lib/components/Title/Header.svelte';
  import Name from '$lib/components/Title/Name.svelte';
  import { pdf } from '$lib/store/pdf';
  import { tick } from 'svelte';
  import Aside from '../Aside/Aside.svelte';
  import Summary from '../Summary/Summary.svelte';
  import WorkExperience from '../WorkExperience/WorkExperience.svelte';

  let html: HTMLElement | null;

  tick().then(() => {
    html && pdf.set(html);
  });
</script>

<section class="pdf-container shadow-resume" bind:this={html}>
  <article class="flex gap-4 p-4">
    <div class="flex flex-col">
      <div class="flex flex-col gap-8 p-4">
        <section class="flex justify-between">
          <div class="flex flex-col gap-4">
            <Header>cv</Header>
            <Name />
          </div>
          <ContactInfo />
        </section>
        <section class="flex flex-col gap-10">
          <Summary />
          <div class="grid grid-cols-[1fr,25%] gap-x-8">
            <WorkExperience />
            <Aside />
          </div>
        </section>
      </div>
    </div>
  </article>
</section>
