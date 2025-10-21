import Link from 'next/link';
import { useState } from 'react';
import { Ticky } from '@/types/ticky';
import { useUpdateTicky } from '@/hooks/useTicky';
import { flexColStart } from '@/styles/mixins';
import styled from 'styled-components';

const TickyItem = ({ ticky }: { ticky: Ticky }) => {
  const { id, title, description, is_done } = ticky;
  const updateTicky = useUpdateTicky();
  const [checked, setChecked] = useState(is_done);

  const handleChecked = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    updateTicky.mutate(
      { is_done: newChecked, id },
      { onError: () => setChecked(!newChecked) }
    );
  };

  return (
    <StyledItemWrap>
      <StyledCheckbox
        id={`ticky-${id}`}
        type="checkbox"
        name="check"
        checked={checked}
        onChange={handleChecked}
      />
      <StyledLabel htmlFor={`ticky-${id}`} checked={checked}>
        <StyledItem href={`/ticky/${ticky.id}`} checked={checked}>
          <span>{title}</span>
          {description && <p>{description}</p>}
        </StyledItem>
      </StyledLabel>
    </StyledItemWrap>
  );
};

export default TickyItem;

const StyledItemWrap = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
`;

const StyledCheckbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 1.125rem;
  height: 1.125rem;
  border: 2px solid #ccc;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition:
    border-color 0.2s,
    background-color 0.2s;

  &:checked {
    border-color: ${({ theme }) => theme.colors.point};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.625rem;
    height: 0.625rem;
    background-color: ${({ theme }) => theme.colors.point};
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.2s ease-in-out;
  }

  &:checked::after {
    transform: translate(-50%, -50%) scale(1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }
`;

const StyledLabel = styled.label<{ checked: boolean }>`
  flex: 1;
  cursor: pointer;
  color: ${({ checked, theme }) => (checked ? '#999' : theme.colors.text)};
  transition: color 0.2s;
`;

const StyledItem = styled(Link)<{ checked: boolean }>`
  ${flexColStart}
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  transition: all 0.2s;

  span {
    font-weight: 500;
  }

  p {
    font-size: 0.875rem;
    color: #999;
  }
`;
