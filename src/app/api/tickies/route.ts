import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);

    const query = searchParams.get('query') || '';
    const page = Number(searchParams.get('page') ?? 1);
    const limit = Number(searchParams.get('limit') ?? 10);
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const supabase = await createClient();
    let queryBuilder = supabase
      .from('tickies')
      .select('*', { count: 'exact' }) // 총 개수 가져오기
      .order('created_at', { ascending: false })
      .range(from, to);

    if (query) {
      queryBuilder = queryBuilder.ilike('title', `%${query}%`); // 대소문자 구분 없이 검색
    }

    const { data, count, error } = await queryBuilder;

    if (error) throw error;
    return NextResponse.json(
      {
        data,
        pagination: {
          page,
          limit,
          totalCount: count,
          totalPage: count ? Math.ceil(count / limit) : 0,
        },
      },
      { status: 200 }
    );
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
    const supabase = await createClient();
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
