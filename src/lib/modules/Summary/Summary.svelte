<script lang="ts">
  import { PERSONAL_INFO } from '$lib/utils/constants';
  import Title from '../../components/Title/Title.svelte';
</script>

<div>
  <Title>
    <span slot="title">summary</span>
  </Title>

  <p class="text-white mt-4 font-sofia text-xl">
    {PERSONAL_INFO.summary}
  </p>
</div>
