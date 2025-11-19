import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';

type SearchProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const Search = ({ search, setSearch }: SearchProps) => {
  const router = useRouter();

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = () => {
    const newQuery = search.trim();

    if (!newQuery) {
      router.push('/');
    } else {
      router.push(`?query=${encodeURIComponent(newQuery)}`);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <StyledSearch>
      <StyledButton onClick={onSearch}>
        <IoSearch />
      </StyledButton>
      <StyledInput
        type="text"
        id="search"
        name="search"
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
        placeholder="찾고 싶은 노트를 입력하세요!"
      />
    </StyledSearch>
  );
};

export default Search;

const StyledSearch = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.7rem 3rem 0.7rem 1rem;
  border-radius: 6.25rem;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background + '80'};

  &::placeholder {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSub};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.point};
  }
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
`;
