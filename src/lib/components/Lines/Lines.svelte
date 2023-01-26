<script lang="ts">
  import { generateNumbers } from '$lib/utils/methods';
  export let limit: number;
</script>

{#each generateNumbers(limit) as number}
  <span class="text-gray text-xs">{number}</span>
{/each}
