import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const GolbalStyle = createGlobalStyle`
  body {
    background : 	#e9ecef;
  }
  
`;

const a = 'sd';
function App() {
  return (
    <>
      <GolbalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
