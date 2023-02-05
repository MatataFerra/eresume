<script lang="ts">
  import { PERSONAL_INFO } from '$lib/utils/constants';
  import Title from '$lib/components/Title/Title.svelte';
</script>

<div>
  <Title customSlash="text-2xl">
    <span slot="title" class="text-2xl">summary</span>
  </Title>

  <p class="text-white mt-2 font-sofia">
    {PERSONAL_INFO.summary}
  </p>
</div>
