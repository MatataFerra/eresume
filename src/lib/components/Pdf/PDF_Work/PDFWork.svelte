<script lang="ts">
  import Title from '$lib/components/Title/Title.svelte';
  import { PDF_JOBS } from '$lib/utils/constants';
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
        I am working as a freelance developer, with different clients, developing their websites and
        apps using <BrandColorWord brand="react" />, <span class="font-bold">NextJS</span>, <BrandColorWord
          brand="vue"
        />, <BrandColorWord brand="svelte" />, <BrandColorWord brand="tailwind" />, <BrandColorWord
          brand="chakra"
        />, <BrandColorWord brand="material" />,
        <span class="font-bold">Express</span>, <BrandColorWord brand="mongo" /> among others.
      </p>
    </PdfExperience>
    <PdfExperience job={PDF_JOBS.steplix}>
      <p class="text-white font-fira text-sm" slot="description">
        I was in charge of developing the frontend, using <span class="font-bold">NextJS</span>
        framework & <BrandColorWord brand="react" /> library, for state management I used <BrandColorWord
          brand="redux"
        />, also <BrandColorWord brand="tailwind" /> for the styles
      </p>
    </PdfExperience>
    <PdfExperience job={PDF_JOBS.corebiz}>
      <p class="text-white font-fira text-sm" slot="description">
        I was responsible for developing the e-commerce apps using <BrandColorWord brand="vtex" />,
        platform, as well as developing custom apps for the platform using <BrandColorWord
          brand="react"
        /> and <BrandColorWord brand="sass" />
      </p>
    </PdfExperience>
  </div>
</div>
