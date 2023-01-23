<script lang="ts">
  import type { Brand } from '$lib/types';
  import { BRANDS } from '$lib/utils/constants';
  import ColorWord from './ColorWord.svelte';

  export let brand: Brand;
</script>

<ColorWord color="{BRANDS[brand].color} font-bold">{BRANDS[brand].name}</ColorWord>
