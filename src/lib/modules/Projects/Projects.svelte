<script>
  import BrandColorWord from '$lib/components/ColorWord/BrandColorWord.svelte';
  import ColorWord from '$lib/components/ColorWord/ColorWord.svelte';
  import Project from '$lib/components/Project/Project.svelte';
  import Title from '$lib/components/Title/Title.svelte';
  import { PROJECTS } from '$lib/utils/constants';
</script>

<section>
  <Title><span slot="title">projects</span></Title>
  <Project projectInfo={PROJECTS.inchequeable} finalLine>
    <p class="text-white" slot="description">
      Site made with <BrandColorWord brand="next" /> & <BrandColorWord brand="typescript" />, <BrandColorWord
        brand="chakra"
      /> and <BrandColorWord brand="mongo" />. It's a blog where you can create posts and comment on
      them. It has a login system with JWT and Bcrypt for password encryption. It also has a system
      to upload images to Cloudinary.
    </p>
  </Project>

  <Project projectInfo={PROJECTS.teslo} finalLine>
    <p class="text-white" slot="description">
      Site made with <BrandColorWord brand="next" /> & <BrandColorWord brand="typescript" />, <BrandColorWord
        brand="material"
      /> and <BrandColorWord brand="mongo" />. It's an e-commerce site where you can buy any kind of
      clothes. It has a login system with NextAuth. It also count with many features like a shopping
      cart, a wishlist, a system to upload images to Cloudinary, a store locator, an admin site with
      stock control, a system to create, update and delete products.
    </p>
  </Project>
  <Project projectInfo={PROJECTS.windows} finalLine>
    <p class="text-white" slot="description">
      As a personal portfolio this site was made with <BrandColorWord brand="react" />, <BrandColorWord
        brand="sass"
      /> and <BrandColorWord brand="mongo" />, among others. It's full of features like a Todo App,
      Spotify app for listening to music, also has my Resume and a collection of my works.
    </p>
  </Project>
  <Project projectInfo={PROJECTS.rps} finalLine>
    <p class="text-white" slot="description">
      This application is a simple game of rock, paper, scissors, but the difference is how it has
      been done. In this application I have implemented two Design Patterns: <BrandColorWord
        brand="factory"
      /> & <BrandColorWord brand="strategy" />, these were tested in <BrandColorWord
        brand="vitest"
      /> with TDD strategy to ensure quality and good functionality. This application was made entirely
      with <BrandColorWord brand="svelte" />
    </p>
  </Project>
  <Project projectInfo={PROJECTS.maps} finalLine>
    <p class="text-white" slot="description">
      This app was made with <BrandColorWord brand="vue" /> and <BrandColorWord
        brand="typescript"
      />, is a Map who is integrated with MapBox API. It has a search bar where you can search for a
      place and it will show you the location on the map. It also has a button to get your current
      location. If you want you can trace the path with a line and know how much distance and time
      are between two dots.
    </p>
  </Project>
</section>
