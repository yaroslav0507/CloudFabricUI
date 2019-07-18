import React from 'react';
import styled from 'styled-components';

interface ILabelWithIconProps {
  label: string;
  icon?: JSX.Element;
}

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconHolder = styled.span`
  width: 30px;
  margin-right: 5px;
`;

export const LabelWithIcon: React.FC<ILabelWithIconProps> = (props) => {
  return (
    <IconWrapper>
      <IconHolder>{props.icon}</IconHolder>
      <span>{props.label}</span>
    </IconWrapper>
  );
};
