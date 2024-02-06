import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { onMinusNum, onPlusNum, onTotalNum } from "./redux/modules/calculator";

function App() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const [total, setTotal] = useState(0);

  const onChangeValue = (e) => {
    setNumber(+e.target.value);
    setTotal(total);
  };
  const onClickPlusNum = (number) => {
    console.log(number);
    dispatch(onPlusNum(number));
    dispatch(onTotalNum(number));
  };
  const onClickMinusNum = (number) => {
    console.log(number);
    dispatch(onMinusNum(number));
    dispatch(onTotalNum(number));
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          name="number"
          value={number}
          onChange={onChangeValue}
        />{" "}
        만큼을 <button onClick={() => onClickPlusNum(number)}>더할게요</button>
        <button onClick={() => onClickMinusNum(number)}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{total}</p>
      </div>
    </div>
  );
}

export default App;
