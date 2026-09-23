import { ChangeEvent, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { SearchProps } from '@/types/ticky';
import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';
import { TickyInput } from '@/components/TickyInput';

const Search = ({ search, setSearch }: SearchProps) => {
  const router = useRouter();

  const onSearch = () => {
    const newQuery = search.trim();

    if (!newQuery) {
      router.push('/');
    } else {
      router.push(`?query=${encodeURIComponent(newQuery)}`);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <StyledSearch>
      <StyledButton onClick={onSearch}>
        <IoSearch />
      </StyledButton>
      <TickyInput
        id="search"
        type="text"
        name="search"
        value={search}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="찾고 싶은 노트를 입력하세요!"
        $round
      />
    </StyledSearch>
  );
};

export default Search;

const StyledSearch = styled.div`
  position: relative;
  width: 100%;
`;

const StyledButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.point};
`;
