<script lang="ts">
  export let skills: string[] = [];
</script>

<ul>
  {#each skills as skill}
    <li class="text-white font-fira text-sm">{skill}</li>
  {/each}
</ul>
