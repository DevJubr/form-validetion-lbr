export const deepClon = (state) => {
  return JSON.parse(JSON.stringify(state));
};

export const ObjIsEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

/**
 *
 * @param {State} state
 * @returns
 */
export const mapStateToValue = (state) => {
  return Object.keys(state).reduce((acc, key) => {
    acc[key] = state[key].value;
    return acc;
  }, {});
};
