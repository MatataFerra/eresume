<script lang="ts">
  import Title from '$lib/components/Title/Title.svelte';
  import { COURSES } from '$lib/utils/constants';
  import PdfCourse from '../PDF_Course/PDFCourse.svelte';

  const orderedCourses = COURSES.sort((value1, value2) => {
    return Number(value1.year) - Number(value2.year);
  });
</script>

<aside class="w-full space-y-8 h-full bg-black">
  <div class="space-y-4">
    <Title customSlash="text-2xl"
      ><span slot="title" class="text-2xl">professional development</span></Title
    >
  </div>
  <div class="space-y-4">
    {#each orderedCourses as course}
      <PdfCourse courseInfo={course} />
    {/each}
  </div>
</aside>
