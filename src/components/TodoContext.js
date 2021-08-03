import React, { createContext, useContext, useReducer, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: false,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: false,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const todoState = createContext();
const todoDispatch = createContext();
const todoNextId = createContext();

export function TodoContext({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  return (
    <todoState.Provider value={state}>
      <todoDispatch.Provider value={dispatch}>
        <todoNextId.Provider value={nextId}>{children}</todoNextId.Provider>
      </todoDispatch.Provider>
    </todoState.Provider>
  );
}

export function useTodoState() {
  const context = useContext(todoState);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(todoDispatch);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(todoNextId);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
