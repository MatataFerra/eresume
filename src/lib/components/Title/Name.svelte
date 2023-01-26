<script lang="ts">
  import { PERSONAL_INFO } from '$lib/utils/constants';
  type Sizes = {
    name?: string;
    job?: string;
  };
  export let sizes: Sizes = {
    name: 'text-4xl',
    job: 'text-1xl'
  };
</script>

<article>
  <h1 class="text-white font-space {sizes.name}">{PERSONAL_INFO.name}</h1>
  <p class="text-white font-space {sizes.job}">({PERSONAL_INFO.job})</p>
</article>
