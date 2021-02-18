import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const StyledTr = styled.tr<RowProps>`
  border: 1px solid #757575;

  background: white;
  :nth-of-type(2n) {
    background: ${({ alternatingColour }) => (alternatingColour ? `#f8f8f8` : `white`)};
  }
`;
const StyledTh = styled.th<CellProps>`
  font-family: 'Open Sans';
  border: 1px solid #757575;
  padding: 0.5rem 1rem;
`;
const StyledTd = styled.td<CellProps>`
  font-family: 'Open Sans';
  border: 1px solid #757575;
  padding: 0.5rem 1rem;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  vertical-align: middle;
`;

interface CellProps extends React.HTMLAttributes<HTMLTableDataCellElement> {
  center?: boolean;
}

interface RowProps {
  alternatingColour?: boolean;
}

interface TableType extends React.FC {
  Tr: typeof StyledTr;
  Th: typeof StyledTh;
  Td: typeof StyledTd;
}

export const Table: TableType = ({ children }) => <StyledTable>{children}</StyledTable>;

Table.Tr = StyledTr;
Table.Th = StyledTh;
Table.Td = StyledTd;
