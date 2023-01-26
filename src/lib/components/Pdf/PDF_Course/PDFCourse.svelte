<script lang="ts">
  import type { Course } from '$lib/types';
  export let courseInfo: Course;
</script>

<div class="text-white space-y-1">
  <div>
    <div class="mb-2">
      <h3 class="capitalize font-bold font-sofia text-blue text-sm tracking-widest">
        {courseInfo.name}
        <span class="text-white">-</span>
        <span class="font-bold font-sofia text-yellow">{courseInfo.institution}</span>
      </h3>
    </div>
    <div class="flex w-fit mt-2 items-center justify-center">
      <p class="p-1 font-bold text-red">{courseInfo.year}</p>
    </div>
    <p class="text-sm">
      {courseInfo.description}
    </p>
  </div>
</div>
