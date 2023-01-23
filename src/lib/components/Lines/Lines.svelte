<script>
  import { generateNumbers } from '$lib/utils/methods';
</script>

{#each generateNumbers() as number}
  <span class="text-gray text-xs">{number}</span>
{/each}
