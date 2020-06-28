import React from 'react';

import { Container } from './styles';

interface TooltioProps {
  title: string;
  className?: string;
}

const ToolTip: React.FC<TooltioProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default ToolTip;
