<script lang="ts">
  import Course from '$lib/components/Courses/Course.svelte';
  import UnStyleList from '$lib/components/List/UnStyleList.svelte';
  import Title from '$lib/components/Title/Title.svelte';
  import { COURSES, SKILLS } from '$lib/utils/constants';

  const orderedCourses = COURSES.sort((value1, value2) => {
    return Number(value1.year) - Number(value2.year);
  });
</script>

<aside class="w-full space-y-8">
  <div class="space-y-4">
    <Title><span slot="title">skills</span></Title>
    <UnStyleList skills={SKILLS} />
  </div>

  <div class="space-y-4">
    <Title customSlash="text-lg"
      ><span slot="title" class="text-lg">professional development</span></Title
    >
  </div>
  <div class="space-y-4">
    {#each orderedCourses as course}
      <Course courseInfo={course} />
    {/each}
  </div>
</aside>
