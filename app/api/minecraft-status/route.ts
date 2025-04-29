import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const address = searchParams.get('address');

  if (!address) {
    return NextResponse.json({ error: 'Missing server address' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.mcsrvstat.us/3/${address}`, {
      headers: {
        'User-Agent': 'MinecraftStatusApp/1.0 (Fallcon)',
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch server data' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}