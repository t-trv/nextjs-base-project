import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const cookieStore = await cookies();

  const { email, password } = await req.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const response = await res.json();

  cookieStore.set('refresh_token', response.data.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
    maxAge: 60 * 60 * 24 * 15,
  });

  cookieStore.set('access_token', response.data.accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return Response.json(response.data.accessToken);
}
