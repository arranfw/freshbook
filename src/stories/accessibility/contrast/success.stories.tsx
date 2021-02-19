import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons/faUserFriends';
import { Table } from '../../components';

const TypographyBase = css`
  font-family: 'Open Sans';
  margin: 0;
`;

const PassingRegularText = styled.p`
  ${TypographyBase}
  color: #757575;
  font-size: 16px;
`;

const PassingBoldText = styled.p`
  ${TypographyBase}
  color: #949494;
  font-size: 14px;
  font-weight: bold;
`;

const PassingLargeText = styled.p`
  ${TypographyBase}
  color: #949494;
  font-size: 18px;
`;

const PassingIcon = styled(Icon)`
  color: #949494;
`;

const PassingInput = styled.input`
  border: 1px solid #949494;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0;
  pointer-events: none;
`;

const DisabledInput = styled.input`
  border: 1px solid #a3a3a3;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0;
`;

const PassingThinFocus = styled(PassingInput)`
  box-shadow: 0 0 0 1px #fff, 0 0 0 2px #757575;
`;

const PassingThickFocus = styled(PassingInput)`
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px #949494;
`;

const AlertStar = styled.span`
  padding: 0.25rem 0.5rem;
  color: ${({ theme }) => theme.palette.tones.critical};
`;

export const Success: React.FC = () => {
  const { Tr, Td, Th } = Table;
  return (
    <>
      <Table>
        <Tr>
          <Th>Element</Th>
          <Th>Minimum Contrast</Th>
        </Tr>
        <Tr>
          <Td>
            <PassingRegularText>Regular Text</PassingRegularText>
          </Td>
          <Td center>4.5:1</Td>
        </Tr>
        <Tr>
          <Td>
            <PassingBoldText>Bold Text</PassingBoldText>
          </Td>
          <Td center>3.0:1</Td>
        </Tr>
        <Tr>
          <Td>
            <PassingLargeText>Large Text</PassingLargeText>
          </Td>
          <Td center>3.0:1</Td>
        </Tr>
        <Tr>
          <Td>
            <PassingBoldText>
              <PassingIcon icon={faUserFriends} />
            </PassingBoldText>
          </Td>
          <Td center>3.0:1</Td>
        </Tr>
        <Tr>
          <Td>
            <PassingInput type='text' value='Input Border' tabIndex={-1} />
          </Td>
          <Td center>3.0:1</Td>
        </Tr>
        <Tr>
          <Td>
            <DisabledInput type='text' value='Disabled Input' disabled />
          </Td>
          <Td center>-</Td>
        </Tr>
        <Tr>
          <Td>
            <PassingThinFocus type='text' value='Thin Focus Ring' tabIndex={-1} />
            <AlertStar>*</AlertStar>
          </Td>
          <Td center>4.5:1</Td>
        </Tr>
        <Tr>
          <Td>
            <PassingThickFocus type='text' value='Thick Focus Ring' tabIndex={-1} />
            <AlertStar>*</AlertStar>
          </Td>
          <Td center>3.0:1</Td>
        </Tr>
      </Table>
      <PassingRegularText>
        <AlertStar>*</AlertStar>
        Focus State References:{' '}
        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.w3.org/WAI/WCAG21/Techniques/css/C40'
          title='WAI Focus State Technique'
        >
          1
        </a>{' '}
        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Contrast_(Minimum)'
          title='WAI Contrast Minimum'
        >
          2
        </a>
      </PassingRegularText>
    </>
  );
};
