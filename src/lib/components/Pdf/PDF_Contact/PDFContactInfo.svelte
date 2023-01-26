<script>
  import { PERSONAL_INFO } from '$lib/utils/constants';
  import Title from '$lib/components/Title/Title.svelte';
</script>

<section class="space-y-2 mt-6">
  <Title customSlash="text-base"><span slot="title" class="text-base">Contact Info</span></Title>
  <div class="font-fira gap-4 text-sm">
    <div class="text-white">
      <p>{PERSONAL_INFO.PDFplace}</p>
      <p>{PERSONAL_INFO.province}</p>
    </div>
    <div class="text-yellow">
      <p>{PERSONAL_INFO.mail}</p>
      <p>{PERSONAL_INFO.phone}</p>
      <p class="font-bold text-blue underline">
        {PERSONAL_INFO.portfolio}
      </p>
    </div>
  </div>
</section>
