'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signup(fullName: string, email: string, phone: string, password: string) {
  const res = await fetch('http://localhost:5100/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName, email, phone, password }),
  });

  if (!res.ok) {
    return { error: 'Invalid credentials' };
  }

  redirect('/signin');
}

export async function signin(email: string, password: string) {
  const res = await fetch('http://localhost:5100/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  (await cookies()).set('access_token', data.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  (await cookies()).set('refresh_token', data.refresh_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 15, // 15 days
  });

  return redirect('/app/dashboard');
}

export async function signout() {
  const res = await fetch('http://localhost:5100/auth/signout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    return { error: 'Invalid credentials' };
  }

  (await cookies()).delete('access_token');
  (await cookies()).delete('refresh_token');

  redirect('/signin');
}

export async function refreshToken() {
  const cookiesStore = await cookies();
  const refreshTokenValue = cookiesStore.get('refresh_token')?.value;

  if (!refreshTokenValue) {
    return null;
  }

  try {
    const res = await fetch('http://localhost:5100/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${refreshTokenValue}`,
      },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.access_token;
  } catch (error) {
    console.error('Refresh token error:', error);
    return null;
  }
}
