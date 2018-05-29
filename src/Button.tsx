import * as React from 'react';
import styled, { css } from 'styled-components'

export interface Props {
  content: string;
}

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

export default class MyComponent extends React.Component<Props, {}> {
  render() {
    return <Button>{this.props.content}</Button>
  }
}
