import { cookies } from 'next/headers';

async function clearAuthCookies() {
  const cookieStore = await cookies();
  cookieStore.delete('refresh_token');
  cookieStore.delete('access_token');
  return Response.json({ success: true });
}

export async function GET() {
  return clearAuthCookies();
}

export async function POST() {
  return clearAuthCookies();
}
