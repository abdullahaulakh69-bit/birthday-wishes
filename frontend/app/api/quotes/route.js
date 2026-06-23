import { quotes } from '@/lib/data/wishes';

export async function GET() {
  return Response.json(quotes);
}
