import React from 'react';
import {
  TooltipBody,
  TooltipComponent,
  TooltipFooter,
  TooltipHead,
} from './Tooltip.styles';

interface ITooltip {
  headContent?: React.ReactNode;
  bodyContent?: React.ReactNode;
  footerContent?: React.ReactNode;
}

const Tooltip = ({ headContent, bodyContent, footerContent }: ITooltip) => {
  return (
    <TooltipComponent>
      <TooltipHead>{headContent}</TooltipHead>
      <TooltipBody>{bodyContent}</TooltipBody>
      <TooltipFooter>{footerContent}</TooltipFooter>
    </TooltipComponent>
  );
};

export default Tooltip;
