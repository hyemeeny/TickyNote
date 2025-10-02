import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

/* Next.js 15.1+ App Router에서는 params가 Promise로 래핑될 수 있음 */
type ParamsProps = Promise<{ id: string }>;

export const GET = async (
  _req: NextRequest,
  { params }: { params: ParamsProps }
) => {
  const { id } = await params;

  try {
    const { data, error } = await supabase
      .from('tickies')
      .select('*')
      .eq('id', id)
      .single(); // 단일 데이터만 반환
    if (error) throw error;

    if (!data) {
      return NextResponse.json(
        { message: '존재하지 않는 Ticky입니다.' },
        { status: 404 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Ticky 조회 중 서버 에러', error);
    return NextResponse.json(
      { message: 'Ticky 조회 중 서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: ParamsProps }
) => {
  const { id } = await params;

  try {
    const { title, description, due_date, is_done } = await req.json();
    const { data, error } = await supabase
      .from('tickies')
      .update({ title, description, due_date, is_done })
      .eq('id', id)
      .select();
    if (error) throw error;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Ticky 수정 중 서버 에러', error);
    return NextResponse.json(
      { message: 'Ticky 수정 중 서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: ParamsProps }
) => {
  const { id } = await params;

  try {
    const { data, error } = await supabase
      .from('tickies')
      .delete()
      .eq('id', id)
      .select();
    if (error) throw error;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Ticky 삭제 중 서버 에러', error);
    return NextResponse.json(
      { message: 'Ticky 삭제 중 서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
};
