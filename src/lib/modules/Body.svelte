<script lang="ts">
  import Summary from '$lib/modules/Summary/Summary.svelte';
  import Header from '$lib/components/Title/Header.svelte';
  import Name from '$lib/components/Title/Name.svelte';
  import WorkExperience from '$lib/modules/WorkExperience/WorkExperience.svelte';
  import Aside from './Aside/Aside.svelte';
  import ContactInfo from '$lib/components/ContactInfo/ContactInfo.svelte';
  import Projects from './Projects/Projects.svelte';
  import Stack from './Stack/Stack.svelte';
  import { cvHeight } from '$lib/store/window';
  import { watchResize } from 'svelte-watch-resize';

  function handleCVResize(node: HTMLElement) {
    cvHeight.update((cvHeight) => {
      cvHeight = node.clientHeight + 2;
      return cvHeight;
    });
  }
</script>

<div class="flex flex-col gap-8 p-4" use:watchResize={handleCVResize}>
  <section class="sm:grid sm:grid-cols-[1fr,25%] sm:gap-x-16 flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <Header>cv</Header>
      <Name />
    </div>
    <ContactInfo />
  </section>
  <section class="flex flex-col gap-10">
    <Summary />
    <div class="sm:grid sm:grid-cols-[1fr,25%] sm:gap-x-16 flex flex-col gap-4">
      <WorkExperience />
      <Aside />
    </div>
    <Projects />
    <Stack />
  </section>
</div>
