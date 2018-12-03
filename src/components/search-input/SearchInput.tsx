import React, { SFC } from 'react';
import styled from 'styled-components';
import Icon from '../icon';

const Container = styled.div`
  display: inline-flex;
`;

const InputComponent = styled.input``;

const SearchInput: SFC = () => (
  <Container>
    <Icon icon="search" />
    <InputComponent />
  </Container>
);

export default SearchInput;
