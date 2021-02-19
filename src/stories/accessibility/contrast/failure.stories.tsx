import React from 'react';
import styled, { css } from 'styled-components';
import { Table } from '../../components';

const TypographyBase = css`
  font-family: 'Open Sans';
  margin: 0;
`;

const FailingText = styled.p`
  ${TypographyBase}
  color: #757575;
  font-size: 16px;
  background: #ededed;
  padding: 0.5rem 1rem;
`;

const FailingInput = styled.input`
  border: 1px solid #bbb;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0;
  pointer-events: none;
`;

const FailingFocus = styled(FailingInput)`
  box-shadow: 0 0 0 1px #bbb;
`;

export const Failure: React.FC = () => {
  const { Tr, Td, Th } = Table;
  return (
    <>
      <Table>
        <Tr>
          <Th>Element</Th>
          <Th>Failure</Th>
        </Tr>
        <Tr>
          <Td>
            <FailingText>Failing Text</FailingText>
          </Td>
          <Td center>
            The same passing text from the earlier example now fails because of a slightly darker background resulting
            in a contrast ratio of 3.9:1.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <FailingInput type='text' value='Failing Input' />
          </Td>
          <Td center>
            This input has a nice subtle border, but at 1.9:1, it doesn't have enough contrast with it's background to
            pass.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <FailingFocus type='text' value='Failing Focus State' />
          </Td>
          <Td center>
            There isn't enough of a distinction from this focus state and it's surrounding colors, neither the
            background nor the input have passing contrast ratio.
          </Td>
        </Tr>
      </Table>
    </>
  );
};
