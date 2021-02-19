import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';

const StyledHeader = styled.nav`
  height: 48px;
  background: #4bcffa;
  color: #151515;

  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans';

  position: relative;
  z-index: 1;
  box-shadow: 0 2px 4px #00000033;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const StyledFooter = styled(StyledHeader)`
  box-shadow: 0 -2px 4px #00000033;
  border-radius: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const HeaderBranding = styled.h3``;

const NavLinks = styled.div``;
const NavLink = styled.a`
  color: #151515;
  border-radius: 4px;
  padding: 0.25rem;
  transition: all 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235); // courtesy of braid design system
  & + & {
    margin-left: 0.5rem;
  }
`;

const StyledInput = styled.input`
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #6e6e6e;
  font-size: 1rem;
  :focus {
    outline: 0;
  }
`;

const StyledLabel = styled.label`
  font-family: 'Open Sans';
  font-size: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledContent = styled.main`
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  background: #f6f6ff;
`;

export const Failure: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <HeaderBranding>Inconsistent Focus States</HeaderBranding>
        <NavLinks>
          <NavLink href='!#' onClick={(e) => e.preventDefault()}>
            Music
          </NavLink>
          <NavLink href='!#' onClick={(e) => e.preventDefault()}>
            Movies
          </NavLink>
          <NavLink href='!#' onClick={(e) => e.preventDefault()}>
            Tv Shows
          </NavLink>
        </NavLinks>
      </StyledHeader>
      <StyledContent>
        <InputWrapper>
          <StyledLabel htmlFor='inputId'>Name</StyledLabel>
          <StyledInput id='inputId' type='text' placeholder='Enter Your Name' />
        </InputWrapper>
        <Button.Primary>Submit</Button.Primary>
      </StyledContent>
      <StyledFooter>
        <p title="This isn't a real copyright">Copyright: Freshbook Industries</p>
        <NavLinks>
          <NavLink href='!#' onClick={(e) => e.preventDefault()}>
            About
          </NavLink>
          <NavLink href='!#' onClick={(e) => e.preventDefault()}>
            Contact
          </NavLink>
        </NavLinks>
      </StyledFooter>
    </>
  );
};
