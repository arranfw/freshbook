import React from 'react';
import { ScheduleView, MonthProps } from '.';

export const Basic: React.FC<MonthProps> = (args) => {
  return <ScheduleView {...args} />;
};
