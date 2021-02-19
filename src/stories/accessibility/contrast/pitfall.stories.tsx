import React from 'react';
import styled, { css } from 'styled-components';
import { Table } from '../../components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const TypographyBase = css`
  font-family: 'Open Sans';
  margin: 0;
`;

const PitfallCardHeader = styled.div`
  ${TypographyBase}
  color: #757575;
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 0.5rem 1rem;
  border: 1px solid #949494;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  :hover {
    background: #c7c7c7;
  }
`;

const BetterCardHeader = styled(PitfallCardHeader)`
  color: #333;
  font-size: 16px;
  padding: 0.5rem 1rem;
  border: 1px solid #949494;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const LightIcon = styled(Icon)`
  color: #949494;
  cursor: pointer;
`;

export const Pitfall: React.FC = () => {
  const { Tr, Td, Th } = Table;
  return (
    <Table>
      <Tr>
        <Th>Element</Th>
        <Th>Pitfall</Th>
      </Tr>
      <Tr>
        <Td>
          <PitfallCardHeader>Card Header</PitfallCardHeader>
        </Td>
        <Td rowSpan={2} center>
          In both of these cases, the card headers were using colors which provided the minimum possible contrast, this
          is risky because it doesn't allow for any breathing room with different component states. When these cards are
          hovered, they fail contrast.
        </Td>
      </Tr>
      <Tr>
        <Td>
          <BetterCardHeader>
            Card Header <LightIcon icon={faTimes} />
          </BetterCardHeader>
        </Td>
      </Tr>
    </Table>
  );
};
