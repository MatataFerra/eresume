<script lang="ts">
  import Title from '$lib/components/Title/Title.svelte';
  import { JOB, PDF_JOBS } from '$lib/utils/constants';
  import BrandColorWord from '$lib/components/ColorWord/BrandColorWord.svelte';
  import PdfExperience from './PDFExperience.svelte';
</script>

<div>
  <Title customSlash="text-2xl">
    <span class="text-2xl" slot="title">work experience</span>
  </Title>
  <div class="mt-4">
    <PdfExperience job={PDF_JOBS.freelance}>
      <p class="text-white font-fira text-sm" slot="description">
        I'm working as a freelance developer, I'm working with different clients, I'm developing
        their websites and apps using <BrandColorWord brand="react" />,
        <span class="font-bold">NextJS</span>, <BrandColorWord brand="vue" />, <BrandColorWord
          brand="svelte"
        />, <BrandColorWord brand="tailwind" />, <BrandColorWord brand="chakra" />, <BrandColorWord
          brand="material"
        />,
        <span class="font-bold">Express</span>, <BrandColorWord brand="mongo" /> among others.
      </p>
    </PdfExperience>
    <PdfExperience job={PDF_JOBS.steplix}>
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
    <PdfExperience job={PDF_JOBS.corebiz}>
      <p class="text-white font-fira text-sm" slot="description">
        I was responsible for the development of e-commerce apps using <BrandColorWord
          brand="vtex"
        />, platform, also develop custom apps for the platform using <BrandColorWord
          brand="react"
        />
      </p>
    </PdfExperience>
  </div>
</div>
