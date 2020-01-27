import * as React from 'react';
import styled from 'styled-components';

const ButtonBlock = styled.div``;
export interface ButtonProps {}

const Button: React.FC<ButtonProps> = props => {
  return <ButtonBlock />;
};

export default Button;
