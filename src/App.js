import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TodoContext } from './components/TodoContext';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const GolbalStyle = createGlobalStyle`
  body {
    background : 	#e9ecef;
  }
  
`;

function App() {
  return (
    <TodoContext>
      <GolbalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoContext>
  );
}

export default App;
