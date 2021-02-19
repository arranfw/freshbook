import styled, { css } from 'styled-components';

const BaseButton = css`
  box-shadow: 0 0 0 2px transparent;
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: 'Open Sans';
  border-radius: 5px;
  transition: all 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235); // courtesy of braid design system
  cursor: pointer;
  :focus {
    outline: 0;
  }
  :active {
    transform: scale(0.95);
  }
`;

const StyledPrimaryButton = styled.button`
  ${BaseButton}

  background: #575fcf;
  color: #fff;

  :hover {
    background: #4d55b8;
  }
  :focus:not(:active) {
    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2e86de;
  }
  :active {
    background: #575fcf;
  }
`;

const StyledSecondaryButton = styled.button`
  ${BaseButton}

  background: #fff;
  color: #575fcf;
  border: 2px solid #575fcf;

  :hover {
    background: #e9eaff;
  }
  :focus:not(:active) {
    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2e86de;
  }
`;

export const Button = {
  Primary: StyledPrimaryButton,
  Secondary: StyledSecondaryButton,
};
