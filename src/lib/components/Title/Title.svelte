<script>
  export let customSlash = '';
</script>

<p class="flex text-red text-2xl sm:text-4xl gap-[5px] font-fira font-bold">
  <span class="text-blue {customSlash} "> / </span>
  <slot name="title" />
</p>
