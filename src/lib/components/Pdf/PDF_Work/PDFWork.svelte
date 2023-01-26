<script lang="ts">
  import Title from '$lib/components/Title/Title.svelte';
  import { JOB } from '$lib/utils/constants';
  import BrandColorWord from '$lib/components/ColorWord/BrandColorWord.svelte';
  import PdfExperience from './PDFExperience.svelte';
</script>

<div>
  <Title customSlash="text-2xl">
    <span class="text-2xl" slot="title">work experience</span>
  </Title>
  <div class="mt-4">
    <PdfExperience job={JOB}>
      <p class="text-white font-fira text-sm" slot="description">
        I was responsible for the development of the frontend, using <span class="font-bold"
          >NextJS</span
        >
        framwork
        <BrandColorWord brand="react" /> library,
        <BrandColorWord brand="redux" /> for state management. I also worked on the backend, using the
        <BrandColorWord brand="node" /> runtime environment and the
        <span class="font-bold">Express</span> framework.
      </p>
    </PdfExperience>
  </div>
</div>
