import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  try {
    const { title, description, due_date, is_done } = await req.json();
    const { data, error } = await supabase
      .from('todos')
      .update({ title, description, due_date, is_done })
      .eq('id', id)
      .select();
    if (error) throw error;
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('서버 에러', error);
    return NextResponse.json(
      { message: '투두 수정 중 서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
};

export const DELETE = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  try {
    const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id)
      .select();
    if (error) throw error;
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('서버 에러', error);
    return NextResponse.json(
      { message: '투두 삭제 중 서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
};
