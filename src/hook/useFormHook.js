/**
 * 1: resive initial obj from user
 * then cooked using mapVAlueToObj function and set up in state.
 */
// _______________________________

import { useState } from "react";
import { deepClon, ObjIsEmpty } from "../utils/Obj-utils";
const useFormHook = ({ init, validat }) => {
  const [State, setState] = useState(mapVAlueToObj(init));

  // hendelChenge
  const hendelChenge = (e) => {
    const { name: key, value } = e.target;
    const copyedState = deepClon(State);
    copyedState[key].value = value;
    const values = mapOjToValue(State, "value");
    const { error } = checkVelidity(values);

    if (copyedState[key].touched && error[key]) {
      copyedState[key].error = error[key];
    } else {
      copyedState[key].error = "";
    }

    setState(copyedState);
  };
  // hendelFocus
  const hendelFocus = (e) => {
    const key = e.target.name;
    const copyedState = deepClon(State);
    copyedState[key].focus = true;

    if (!copyedState[key].touched) {
      copyedState[key].touched = true;
    }

    setState(copyedState);
  };
  // hendelblur
  const hendelblur = (e) => {
    const key = e.target.name;

    const copyedState = deepClon(State);

    const values = mapStateToValue(copyedState);
    const { error } = checkVelidity(values);

    if (copyedState[key].touched && error[key]) {
      copyedState[key].error = error[key];
    } else {
      copyedState[key].error = "";
    }

    copyedState[key].touched = false;

    setState(copyedState);
  };
  // hendelSubmitted
  const hendelSubmitted = (e, cb) => {
    e.preventDefault();

    if (typeof validat === "boolean") {
      if (validat) {
        cb({
          value: mapOjToValue(State, "value"),
          touched: mapOjToValue(State, "touched"),
          focused: mapOjToValue(State, "focused"),
          error: mapOjToValue(State, "error"),
          hasError: false,
        });
      } else {
        cb({
          error: mapOjToValue(State, "error"),
          hasError: true,
        });
      }
      return;
    }

    if (typeof validat === "function") {
      const values = mapOjToValue(State, "value");
      const { error } = validat(values);
      const hasError = !ObjIsEmpty(error);
      if (typeof validat === "function") {
        if (!hasError) {
          cb({
            value: mapOjToValue(State, "value"),
            touched: mapOjToValue(State, "touched"),
            focused: mapOjToValue(State, "focused"),
            error: mapOjToValue(State, "error"),
            hasError: false,
          });
        } else {
          cb({
            error: mapOjToValue(State, "error"),
            hasError: true,
          });
        }
      }
      return;
    }

    if (isValid) {
      console.log(State);
    } else {
      const copyedState = deepClon(State);
      Object.keys(error).forEach((key) => {
        copyedState[key].error = error[key];
      });
      setState(copyedState);
    }
    // console.log(State);
  };

  return {
    formState: State,
    hendelChenge,
    hendelFocus,
    hendelblur,
    hendelSubmitted,
  };
};

export default useFormHook;

// helperFunction
const mapVAlueToObj = (obj) => {
  const state = Object.keys(obj).reduce((acc, key) => {
    acc[key] = {
      value: obj[key],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
  return state;
};

const mapOjToValue = (obj, val) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = obj[key][val];
    return acc;
  }, {});
};
