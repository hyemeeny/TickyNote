import { PaginationProps } from '@/types/ticky';

const Pagination = ({ page, totalPage, onChange }: PaginationProps) => {
  return (
    <nav aria-label="pagination">
      {/* 이전 페이지 */}
      <button onClick={() => onChange(page - 1)} disabled={page === 1}>
        &lt;
      </button>

      {/* 페이지 번호 */}
      {Array.from({ length: totalPage }).map((_, i) => {
        const pageNum = i + 1;
        return (
          <button
            key={pageNum}
            onClick={() => onChange(pageNum)}
            aria-current={page === pageNum}
          >
            {pageNum}
          </button>
        );
      })}

      {/* 다음 페이지 */}
      <button onClick={() => onChange(page + 1)} disabled={page === totalPage}>
        &gt;
      </button>
    </nav>
  );
};

export default Pagination;
