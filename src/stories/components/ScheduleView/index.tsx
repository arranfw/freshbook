import React from 'react';
import styled from 'styled-components';
import add from 'date-fns/add';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import isSameDay from 'date-fns/isSameDay';

export type MonthProps = {
  monthOffset: number;
  bookings: Array<BookingDate>;
};

export type BookingDate = {
  date: Date;
  period?: BookingPeriod;
};

export enum BookingPeriod {
  MORNING = 'MORNING',
  AFTERNOON = 'AFTERNOON',
  WHOLE_DAY = 'WHOLE_DAY',
}

const BookingPeriodStyleMap = {
  [BookingPeriod.WHOLE_DAY]: '#FCBA19',
  [BookingPeriod.AFTERNOON]: 'linear-gradient(0deg, #FCBA19 50%, #FFFFFF 50%)',
  [BookingPeriod.MORNING]: 'linear-gradient(0deg, #FFFFFF 50%, #FCBA19 50%)',
};

const StyledMonth = styled.div`
  display: inline-flex;
  flex-direction: column;
  & + & {
    margin-left: 2rem;
  }
`;

const MonthName = styled.div`
  font-family: 'Open Sans';
  text-align: center;
  margin-bottom: 0.5rem;
`;

const StyledDay = styled.div<{ period?: string }>`
  font-family: 'Open Sans';
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;

  box-sizing: border-box;
  border: ${({ period }) => (period ? 'solid 1px #313132' : '0')};
  border-radius: ${({ period }) => (period ? '4px' : '0')};
  background: ${({ period }) => BookingPeriodStyleMap[period as BookingPeriod] || 'transparent'};
`;

const StyledWeek = styled.div<{ header?: boolean }>`
  display: inline-flex;
  ${({ header }) => (header ? 'background: #eee' : '')};
  border-radius: 4px;
`;

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const ScheduleView: React.FC<MonthProps> = ({ monthOffset = 0, bookings }) => {
  const now = new Date();
  const offsetMonth = add(now, { months: monthOffset });
  const monthStart = startOfMonth(offsetMonth);
  const monthEnd = endOfMonth(offsetMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const firstDay = days[0].getDay();
  let date = 1;

  let weeksArray = [];

  for (let i = 0; i < 6; i++) {
    let week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay) || date > days.length) {
        week.push(null);
      } else {
        week.push(monthOffset === 0 && now.getDate() > date ? null : days[date - 1]);
        date++;
      }
    }
    weeksArray.push(week);
  }

  return (
    <StyledMonth>
      <MonthName>{monthNames[offsetMonth.getMonth()]}</MonthName>
      <StyledWeek header>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
          <StyledDay>{day}</StyledDay>
        ))}
      </StyledWeek>
      {weeksArray.map((week) => (
        <StyledWeek>
          {week.map((day) => (
            <ScheduleDay day={day} bookings={bookings} />
          ))}
        </StyledWeek>
      ))}
    </StyledMonth>
  );
};

const ScheduleDay: React.FC<{ day: Date | null; bookings: Array<BookingDate> }> = ({ day, bookings }) => {
  if (!day) return <StyledDay />;

  const period = bookings.find((bookingDate: BookingDate) => isSameDay(bookingDate.date, day))?.period;

  return (
    <StyledDay period={period}>
      <b>{day.getDate()}</b>
    </StyledDay>
  );
};
