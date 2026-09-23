import { useParams } from 'next/navigation';
import { useTickyDetail } from '@/hooks/useTicky';
import TickyForm from '@/components/TickyForm';

const EditTickyPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: ticky, isLoading } = useTickyDetail(id);

  if (isLoading) return <p>Loading...</p>;
  if (!ticky) return <p>존재하지 않는 노트입니다.</p>;

  return <TickyForm mode="edit" id={id} defaultValues={ticky} />;
};

export default EditTickyPage;
