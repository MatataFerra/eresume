<script lang="ts">
  import Tooltip from './Tooltip.svelte';
  import * as Icon from '$lib/components/Icons/Stack';

  export let iconsStyles: string;
  export let title: string;
  export let icon: keyof typeof Icon;
  let IconComponent: (typeof Icon)[keyof typeof Icon] = Icon[icon];
</script>

<Tooltip {title}>
  <IconComponent styles={iconsStyles} />
</Tooltip>
