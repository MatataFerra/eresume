<script lang="ts">
  import VisitPage from '../Buttons/VisitPage.svelte';
  import type { Project } from '$lib/types';
  export let projectInfo: Project;
  export let finalLine: boolean = false;
</script>

<section class="my-4">
  <div class="md:grid md:grid-cols-2 gap-8 flex flex-col">
    <div>
      <code class="text-white font-space text-xl mb-2">{projectInfo.name}</code>
      <img src="/img/{projectInfo.image}" alt="Blog" />
    </div>
    <div>
      <article class="my-4 font-space text-base sm:text-xl">
        <slot name="description" />
      </article>
      <VisitPage href={projectInfo.href} />
    </div>
  </div>
</section>
{#if finalLine}
  <hr class="h-px my-8 bg-gray border-0" />
{/if}
