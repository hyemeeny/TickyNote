'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  $variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  type = 'button',
  $variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      $variant={$variant}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  $variant?: 'primary' | 'secondary' | 'danger';
}>`
  padding: 0.3125rem 1.25rem;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 0.875rem;

  background-color: ${({ $variant, theme }) => {
    switch ($variant) {
      case 'secondary':
        return theme.colors.gray;
      case 'danger':
        return theme.colors.red;
      default:
        return theme.colors.point;
    }
  }};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
