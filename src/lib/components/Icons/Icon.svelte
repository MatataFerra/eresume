<script lang="ts">
  import * as Icon from '$lib/components/Icons/Stack';

  export let iconsStyles: string;
  export let icon: keyof typeof Icon;
  let IconComponent: (typeof Icon)[keyof typeof Icon] = Icon[icon];
</script>

<span>
  <IconComponent styles={iconsStyles} />
</span>
