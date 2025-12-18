import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getTickies,
  createTicky,
  updateTicky,
  deleteTicky,
  getTickyDetail,
} from '@/lib/api/ticky';

export const useTicky = (query: string, page: number, limit: number) => {
  return useQuery({
    queryKey: ['ticky', query, page, limit],
    queryFn: () => getTickies(query, page, limit),
    enabled: query !== undefined,
  });
};

export const useTickyDetail = (id: string) => {
  return useQuery({
    queryKey: ['ticky', id],
    queryFn: () => getTickyDetail(id),
    enabled: !!id,
  });
};

export const useCreateTicky = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTicky,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ticky'] });
    },
  });
};

export const useUpdateTicky = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTicky,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ticky'] });
    },
  });
};

export const useDeleteTicky = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTicky,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ticky'] });
    },
  });
};
