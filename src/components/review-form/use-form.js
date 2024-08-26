import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rate: 1,
};

const reducer = (state, { type, payload }) => {
  const value = payload.target.value;

  switch (type) {
    case "SET_NAME":
      return { ...DEFAULT_FORM_VALUE, name: value };
    case "SET_TEXT":
        return { ...state, text: value };
    case "SET_RATE":
        return { ...state, rate: value };
    // case "CLEAR":
    //     return { ...state, rate: value };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const setName = (event) => dispatch({ type: "SET_NAME", payload: event });
  const setText = (event) => dispatch({ type: "SET_TEXT", payload: event });
  const setRate = (event) => dispatch({ type: "SET_RATE", payload: event });
  //const clear   = (event) => dispatch({ type: "CLEAR"   , payload: event });

  return {
    form,
    setName,
    setText,
    setRate,
    // clear,
  };
};
