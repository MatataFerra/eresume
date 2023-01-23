<script lang="ts">
  import type { Item } from '$lib/types';
  export let responsabilities: Item[] = [];
</script>

<ul class="list-disc list-inside m-4 space-y-2">
  {#each responsabilities as item, index}
    <li class="text-white font-fira {index % 2 !== 0 && 'font-bold'}">
      {item.description}
    </li>
  {/each}
</ul>
