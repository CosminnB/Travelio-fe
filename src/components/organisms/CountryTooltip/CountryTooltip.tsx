import * as Progress from 'react-native-progress';
import React from 'react';
import { TooltipBodyText, TooltipHeading } from './CountryTooltip.styles';
import Tooltip from '../../molecules/Tooltip/Tooltip';
const percentage = 35;
const TooltipHead = () => (
  <>
    <Progress.Bar
      width={null}
      height={50}
      animated
      progress={percentage / 100}
      color="#A532FF"
      unfilledColor="#D9BBFF"
      borderRadius={15}
      animationType="timing"
    />
    <TooltipHeading>You've visited {percentage}% of Poland</TooltipHeading>
  </>
);
const TooltipBody = () => (
  <TooltipBodyText>
    Discover the next destination in Poland now!
  </TooltipBodyText>
);
const CountryTooltip = () => {
  return (
    <Tooltip headContent={<TooltipHead />} bodyContent={<TooltipBody />} />
  );
};

export default CountryTooltip;
