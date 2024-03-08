import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type CounterProps = {
  initialValue: number;
}

const Counter: FunctionComponent<CounterProps> = (props) => {
// variable de estado y función que permitirá cambiarla
const [number, setNumber] = useState<number>(props.initialValue);
  return (
    <>
    <h1>{number}</h1>
    <button disabled = {number === 0 } onClick = {() => setNumber(number -1)}>Minus 1</button>
    { number === 0 && <h2>It is over for u</h2>}
    </>
  )
}

export default Counter;