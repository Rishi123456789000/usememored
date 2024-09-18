import React, { useReducer } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add_data":
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload
        }
      ];
    case "delete_data":
      return state.filter(item => item.id !== action.payload.id);
    case "update_data":
      return state.map(item => item.id === action.payload.id ? { ...item, name: action.payload.name } : item);
    default:
      return state;
  }
}

const Useredu = () => {
  const [crudlist, dispatch] = useReducer(reducer, initialState);
  let inputData = "";
  let updateData = "";

  return (
    <>
      <div>
        <h2>crudlist: {crudlist.length}</h2>
        <input
          type="text"
          onChange={(e) => inputData = e.target.value} 
        />
        <button onClick={() => dispatch({ type: 'add_data', payload: inputData })}>
          Add
        </button>
      </div>
      <ul>
        {crudlist.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({ type: 'delete_data', payload: { id: item.id } })}>
              Delete
            </button>
            <input 
              type="text" 
              placeholder="Update" 
              onChange={(e) => updateData = e.target.value} 
            />
            <button onClick={() => dispatch({ type: 'update_data', payload: { id: item.id, name: updateData } })}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Useredu;

