<script lang="ts">
  import Experience from '$lib/components/Experience/Experience.svelte';
  import Title from '../../components/Title/Title.svelte';
  import ColorWord from '$lib/components/ColorWord/ColorWord.svelte';
  import { JOB } from '$lib/utils/constants';
  import BrandColorWord from '$lib/components/ColorWord/BrandColorWord.svelte';
</script>

<div>
  <Title>
    <span slot="title">work experience</span>
  </Title>
  <div class="mt-4">
    <Experience job={JOB}>
      <p class="text-white font-fira" slot="description">
        <ColorWord color="text-yellow">I</ColorWord> was responsible for the development of the frontend,
        using <span class="font-bold">NextJS</span> framwork
        <BrandColorWord brand="react" /> library,
        <BrandColorWord brand="redux" /> for state management. I also worked on the backend, using the
        <BrandColorWord brand="node" /> runtime environment and the
        <span class="font-bold">Express</span> framework.
      </p>
    </Experience>
  </div>
</div>
