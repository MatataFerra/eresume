<script lang="ts">
  import Experience from '$lib/components/Experience/Experience.svelte';
  import Title from '../../components/Title/Title.svelte';
  import { JOB, JOB_EXPERIENCE } from '$lib/utils/constants';
</script>

<div>
  <Title>
    <span slot="title">work experience</span>
  </Title>
  <div class="mt-4">
    {#each JOB_EXPERIENCE as job}
      <Experience {job} />
    {/each}
  </div>
</div>
