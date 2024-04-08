import React, {createContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const ToDoContext = createContext();

const ToDoProvider = ({children}) => {
  const [toDos, setToDos] = useState([]);
  const [user, setUser] = useState(null);
  const [countDone, setCountDone] = useState(0);

  console.log(toDos);

  const todosRef = firestore().collection(`${user?.id}`);

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
      {id: currentTimeSeconds, doneStatus: false, date: formattedDate, ...task},
    ]);

    todosRef
      .doc(`${currentTimeSeconds}`)
      .set({
        id: currentTimeSeconds,
        doneStatus: false,
        date: formattedDate,
        ...task,
      });
  };

  const getTodosFromFireStore = () => {
    firestore()
      .collection(`${user?.id}`) // Replace 'yourCollection' with the name of your collection
      .onSnapshot(querySnapshot => {
        const documents = [];
        querySnapshot.forEach(doc => {
          documents.push({id: doc.id, ...doc.data()});
        });
        setToDos(documents);
      });
  };

  const updateTodo = (id, updatedProperties) => {
    const updatedTodos = toDos.map(item => {
      if (item.id !== id) {
        return item;
      }
      return {
        ...item,
        ...updatedProperties,
      };
    });
    setToDos(updatedTodos);

    // Update in firebase
    todosRef
    .doc(`${id}`)
    .update(updatedProperties)
    .then(() => {
      console.log('Document updated successfully');
    })
    .catch(error => {
      console.error('Error updating document: ', error);
    });

  };

  const removeToDo = id => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
    // Delete from firestore
    todosRef
    .doc(`${id}`) 
    .delete()
    .then(() => {
      console.log('Document deleted successfully');
    })
    .catch(error => {
      console.error('Error deleting document: ', error);
    });
  };

  const resetToDos = () => {
    setToDos([]);
  };

  return (
    <ToDoContext.Provider
      value={{
        toDos,
        addToDo,
        updateTodo,
        removeToDo,
        resetToDos,
        countDone,
        setCountDone,
        user,
        setUser,
        getTodosFromFireStore
      }}>
      {children}
    </ToDoContext.Provider>
  );
};

export {ToDoContext, ToDoProvider};
