import { url } from '@/lib/social';
import { InstagramResponse } from '@/types/instagram';

export async function getInstagramPosts() {
  try {
    const data = await fetch(url);
    const feed = await data.json();
    return feed.data as InstagramResponse;
  } catch {
    console.warn("Couldn't fetch Instagram Posts");
  }
}
