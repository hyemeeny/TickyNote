import { Ticky } from '@/types/ticky';

export const getTickies = async (query: string, page = 1, limit = 10) => {
  const res = await fetch(
    `/api/tickies?query=${encodeURIComponent(query)}&page=${page}&limit=${limit}`
  );
  if (!res.ok) throw new Error('Ticky 조회 실패');
  return res.json();
};

export const createTicky = async (data: {
  title: string;
  description?: string;
}) => {
  const res = await fetch('/api/tickies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Ticky 생성 실패');
  return res.json();
};

export const updateTicky = async (
  data: { id: string } & Partial<Omit<Ticky, 'id'>>
) => {
  const res = await fetch(`/api/tickies/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Ticky 수정 실패');
  return res.json();
};

export const deleteTicky = async (id: string) => {
  const res = await fetch(`/api/tickies/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Ticky 삭제 실패');
  return res.json();
};

export const getTickyDetail = async (id: string): Promise<Ticky> => {
  const res = await fetch(`/api/tickies/${id}`);
  if (!res.ok) throw new Error('Ticky 조회 실패');
  return res.json();
};
