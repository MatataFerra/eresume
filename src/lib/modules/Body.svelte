<script lang="ts">
  import Summary from '$lib/modules/Summary/Summary.svelte';
  import Header from '$lib/components/Title/Header.svelte';
  import Name from '$lib/components/Title/Name.svelte';
  import WorkExperience from '$lib/modules/WorkExperience/WorkExperience.svelte';
  import Aside from './Aside/Aside.svelte';
  import ContactInfo from '$lib/components/ContactInfo/ContactInfo.svelte';
  import Projects from './Projects/Projects.svelte';
</script>

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
    <Projects />
  </section>
</div>
