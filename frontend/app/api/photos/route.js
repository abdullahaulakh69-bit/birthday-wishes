import { photos } from '@/lib/data/wishes';

export async function GET() {
  return Response.json(photos);
}
