<script lang="ts">
  import Download from '$lib/components/Icons/Download.svelte';
  import Github from '$lib/components/Icons/Github.svelte';
  import Tooltip from '$lib/components/Tooltip/Tooltip.svelte';
  import { pdf } from '$lib/store/pdf';
  import { generatePdf } from '$lib/utils/methods';
</script>

<nav>
  <ul class="flex gap-4 justify-end">
    <li class="w-6 cursor-pointer">
      <Tooltip title="Check out my Repo!">
        <a href="https://github.com/MatataFerra" target="_blank" rel="noreferrer">
          <Github />
        </a>
      </Tooltip>
    </li>
    <li class="w-6 cursor-pointer">
      <Tooltip title="Download my CV as PDF">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={() => generatePdf($pdf)}>
          <Download />
        </span>
      </Tooltip>
    </li>
  </ul>
</nav>
