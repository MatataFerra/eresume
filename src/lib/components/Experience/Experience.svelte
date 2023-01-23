<script lang="ts">
  import List from '$lib/components/List/List.svelte';
  import type { Job } from '$lib/types';
  export let job: Job;
</script>

<article class="space-y-2 font-sofia">
  <p class="text-yellow font-bold lowercase">( {job.title} )</p>
  <div class="flex justify-between">
    <p class="text-red uppercase font-semibold tracking-[0.3rem]">{job.company}</p>
    <p class="text-yellow lowercase font-bold">{job.startDate} - {job.endDate}</p>
  </div>
  <div>
    <slot name="description" />

    {#if job.responsabilities.length}
      <List responsabilities={job.responsabilities} />
    {/if}
  </div>
</article>
