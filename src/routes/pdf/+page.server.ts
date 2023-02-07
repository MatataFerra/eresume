import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// protect route
export const load: PageServerLoad = async () => {
  console.log('Private route Redirect to /');
  throw redirect(303, '/');
  // when is ok
  // return {
  //   status: 200
  // };
};
