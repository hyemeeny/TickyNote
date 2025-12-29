import { flexRowCenter } from '@/styles/mixins';
import { PaginationProps } from '@/types/ticky';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import styled, { css } from 'styled-components';

const PAGE_SIZE = 5;

const Pagination = ({ page, totalPage, onChange }: PaginationProps) => {
  const start = Math.floor((page - 1) / PAGE_SIZE) * PAGE_SIZE + 1;
  const end = Math.min(start + PAGE_SIZE - 1, totalPage);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <StyledPagination aria-label="pagination">
      {/* 처음 페이지 */}
      <StyledArrowBtn
        onClick={() => onChange(start - 1)}
        disabled={start === 1}
        aria-label="처음 페이지로 이동"
        aria-disabled={start === 1}
      >
        <MdKeyboardDoubleArrowLeft />
      </StyledArrowBtn>

      {/* 이전 페이지 */}
      <StyledArrowBtn
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="이전 페이지로 이동"
        aria-disabled={page === 1}
      >
        <MdKeyboardArrowLeft />
      </StyledArrowBtn>

      {/* 페이지 번호 */}
      {pages.map((num) => {
        return (
          <StyledNumBtn
            key={num}
            onClick={() => onChange(num)}
            aria-current={num === page ? 'page' : undefined}
            aria-label={`페이지 ${num}${num === page ? ', 현재 페이지' : ''}`}
          >
            {num}
          </StyledNumBtn>
        );
      })}

      {/* 다음 페이지 */}
      <StyledArrowBtn
        onClick={() => onChange(page + 1)}
        disabled={page === totalPage}
        aria-label="다음 페이지로 이동"
        aria-disabled={page === totalPage}
      >
        <MdKeyboardArrowRight />
      </StyledArrowBtn>

      {/* 마지막 페이지 */}
      <StyledArrowBtn
        onClick={() => onChange(end + 1)}
        disabled={end === totalPage}
        aria-label="마지막 페이지로 이동"
        aria-disabled={end === totalPage}
      >
        <MdKeyboardDoubleArrowRight />
      </StyledArrowBtn>
    </StyledPagination>
  );
};

export default Pagination;

const CommonStyles = css`
  width: 1.875rem;
  height: 1.875rem;
  ${flexRowCenter}
  border-radius: 6.25rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledPagination = styled.nav`
  ${flexRowCenter}
`;

const StyledArrowBtn = styled.button<{ disabled: boolean }>`
  ${CommonStyles}
  color: ${({ disabled, theme }) => disabled && theme.colors.textSub};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledNumBtn = styled.button`
  ${CommonStyles}
  &[aria-current='page'] {
    background-color: ${({ theme }) => theme.colors.point};
    cursor: default;
  }
`;
