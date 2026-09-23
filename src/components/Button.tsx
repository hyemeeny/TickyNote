import { ButtonHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: 'primary' | 'secondary' | 'danger';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type = 'button', $variant = 'primary', ...props }, ref) => {
    return (
      <StyledButton ref={ref} type={type} $variant={$variant} {...props}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

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
