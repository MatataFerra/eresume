<script lang="ts">
  import { tick } from 'svelte';
  import Title from '../../components/Title/Title.svelte';
  import { summary, pdf } from '$lib/store/pdf';
  let summ: HTMLElement | null;

  tick().then(() => {
    summ && summary.set(summ);
  });
</script>

<div bind:this={summ}>
  <Title>
    <span slot="title">summary</span>
  </Title>

  <p class="text-white mt-4 font-sofia">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque officiis magnam dicta, hic
    dolor nostrum aliquid quae, minus ullam provident earum animi, commodi ea nesciunt id laudantium
    voluptatum veritatis?
  </p>
</div>
