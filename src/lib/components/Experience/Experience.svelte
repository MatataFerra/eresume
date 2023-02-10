<script lang="ts">
  import List from '$lib/components/List/List.svelte';
  import type { Job } from '$lib/types';
  import { BRANDS_NAMES } from '$lib/utils/constants';
  import { highlightKeyWords, parseStringIntoHTML } from '$lib/utils/methods';
  import { onMount, tick } from 'svelte';
  export let job: Job;

  let jobDescription: any;
  let jobParsedIntoHTML: any;
  let jobContainer: HTMLElement;

  onMount(() => {
    if (job.description) {
      jobDescription = highlightKeyWords(job.description, BRANDS_NAMES);
      jobParsedIntoHTML = parseStringIntoHTML(jobDescription);
      jobContainer.appendChild(jobParsedIntoHTML);
    }
  });
</script>

<article class="space-y-2 font-sofia">
  <p class="text-yellow font-bold lowercase">( {job.title} )</p>
  <div class="flex justify-between">
    <p class="text-red uppercase font-semibold tracking-[0.3rem]">{job.company}</p>
    <p class="text-yellow lowercase font-bold">{job.startDate} - {job.endDate}</p>
  </div>
  <div>
    <div bind:this={jobContainer} />

    {#if job.responsabilities.length}
      <List responsabilities={job.responsabilities} />
    {/if}
  </div>
</article>
<hr class="h-px my-8 bg-gray border-0" />
