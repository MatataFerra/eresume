<script lang="ts">
  import type { Course } from '$lib/types';

  let isOpenSkill_1 = true;
  export let courseInfo: Course;
</script>

<div class="text-white space-y-1">
  <div>
    <div>
      <h3 class="capitalize font-bold font-sofia text-blue text-sm tracking-widest">
        {courseInfo.name}
        <span class="text-white">-</span>
        <span class="font-bold font-sofia text-yellow">{courseInfo.institution}</span>
      </h3>
    </div>

    <details bind:open={isOpenSkill_1}>
      <summary class="cursor-pointer font-bold font-sofia text-xs tracking-widest transition-all"
        >Details</summary
      >
      <code class="bg-red p-1">{courseInfo.year}</code>
      <p>
        {courseInfo.description}
      </p>
    </details>
  </div>
</div>
