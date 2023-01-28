<script lang="ts">
  import Download from '$lib/components/Icons/Download.svelte';
  import Github from '$lib/components/Icons/Github.svelte';
  import Svelte from '$lib/components/Icons/Stack/Svelte.svelte';
  import Tooltip from '$lib/components/Tooltip/Tooltip.svelte';
  import { downloadFile } from '$lib/utils/methods';
</script>

<nav>
  <ul class="flex gap-4 justify-end">
    <li class="flex gap-2">
      <span class="text-white font-bold">Made with: </span>
      <Tooltip title="SvelteKit 💪">
        <Svelte styles="w-6" />
      </Tooltip>
    </li>
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
        <span on:click={() => downloadFile()}>
          <Download />
        </span>
      </Tooltip>
    </li>
  </ul>
</nav>
