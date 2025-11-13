import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query') || '';

    let queryBuilder = supabase.from('tickies').select('*');

    if (query) {
      queryBuilder = supabase
        .from('tickies')
        .select('*')
        .ilike('title', `%${query}%`);
    }

    const { data, error } = await queryBuilder;

    if (error) throw error;
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('서버 에러', error);
    return NextResponse.json(
      { message: 'Ticky 조회 중 서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.json();
    const { data, error } = await supabase.from('tickies').insert({
      ...formData,
      created_at: new Date().toISOString(),
    });
    if (error) throw error;
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('서버 에러', error);
    return NextResponse.json(
      { message: 'Ticky 생성 중 서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
};
