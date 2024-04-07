import React, {createContext, useState} from 'react';

const ToDoContext = createContext();

const ToDoProvider = ({children}) => {
  const [toDos, setToDos] = useState([]);
  const [user, setUser] = useState(null)

  const currentDate = new Date();
  const currentTimeSeconds = Math.floor(currentDate.getTime() / 1000);
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  const addToDo = task => {
    setToDos([
      ...toDos,
      {id: currentTimeSeconds, data: formattedDate, ...task},
    ]);
  };

  console.log(toDos);

  const removeToDo = id => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  };

  return (
    <ToDoContext.Provider value={{toDos, addToDo, removeToDo, user, setUser}}>
      {children}
    </ToDoContext.Provider>
  );
};

export {ToDoContext, ToDoProvider};
