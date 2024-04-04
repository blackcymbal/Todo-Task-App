import React, {createContext, useState} from 'react';

const ToDoContext = createContext();

const ToDoProvider = ({children}) => {
  const [toDos, setToDos] = useState([]);

  const addToDo = text => {
    setToDos([...toDos, {id: toDos.length + 1, text}]);
  };

  console.log(toDos)

  const removeToDo = id => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  };

  return (
    <ToDoContext.Provider value={{toDos, addToDo, removeToDo}}>
      {children}
    </ToDoContext.Provider>
  );
};

export {ToDoContext, ToDoProvider};
