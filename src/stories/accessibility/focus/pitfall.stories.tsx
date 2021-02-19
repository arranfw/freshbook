import React, { useState } from 'react';
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

const StyledContent = styled.main`
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  background: #f6f6ff;
  overflow: hidden;
`;

const Modal = styled.div<{ open?: boolean }>`
  position: absolute;
  top: -50px;
  bottom: -50px;
  left: 0;
  right: 0;
  background: #f1f1ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: all 0.3s ${({ open }) => (open ? 'cubic-bezier(0, 1.06, .63, 1.1)' : 'cubic-bezier(.27, -0.06, 1, -0.1)')};
  transform: translateY(${({ open }) => (open ? '0' : '-100%')});
  opacity: ${({ open }) => (open ? '1' : '0')};
`;

export const Pitfall: React.FC = () => {
  const [open, setOpen] = useState(false);
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
        <Modal open={open}>
          <Button.Secondary>Superfluous</Button.Secondary>
          <hr />
          <Button.Primary onClick={() => setOpen(false)}>Close Modal</Button.Primary>
        </Modal>
        <Button.Primary onClick={() => setOpen(true)}>Open Modal</Button.Primary>
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
