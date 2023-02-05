<script lang="ts">
  import type { Brand } from '$lib/types';
  import { BRANDS, BRANDS_NAMES } from '$lib/utils/constants';
  import ColorWord from './ColorWord.svelte';

  export let brand: Brand;
  let selectedBrand = BRANDS_NAMES.find((name) => name === brand) || 'next';
  const Brand = BRANDS[selectedBrand];
</script>

<ColorWord color="{Brand?.color} font-bold">{Brand?.name}</ColorWord>
