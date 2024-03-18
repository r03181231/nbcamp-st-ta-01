// action value
const PLUS_NUM = "PLUS_NUM";
const MINUS_NUM = "MINUS_NUM";
const TOTAL_NUM = "TOTAL_NUM";

export const onPlusNum = (payload) => {
  return {
    type: PLUS_NUM,
    payload,
  };
};
export const onMinusNum = (payload) => {
  return {
    type: MINUS_NUM,
    payload,
  };
};

export const onTotalNum = (number) => {
  return {
    type: TOTAL_NUM,
    payload: number,
  };
}; // action creator

// 초기 상태값
const initialState = {
  number: 0,

  totalNumber: 0,
};

// 리듀서
const calculator = (state = initialState, action) => {
  console.log("action.payload=>", action.payload);
  console.log(state.number);
  switch (action.type) {
    case "PLUS_NUM":
      return { ...state, number: state.number + action.payload };
    case "MINUS_NUM":
      return { ...state, number: state.number - action.payload };
    case "TOTAL_NUM":
      return {
        totalNumber: state.number + action.payload,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
