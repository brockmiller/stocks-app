import React, { PropTypes } from 'react';
import { Button, IconButton } from 'react-toolbox/lib/button';
import theme from './styles/button.scss';

const TouchButton = ({ children, ...props }) => (
  <Button {...props} theme={theme}>{children}</Button>
)

TouchButton.propTypes = {
  children: PropTypes.node
};

const TouchIconButton = ({ children, ...props }) => (
  <IconButton {...props} theme={theme}>{children}</IconButton>
)

TouchIconButton.propTypes = {
  children: PropTypes.node
};

export { TouchButton, TouchIconButton }
