import { Signal, useSignal } from "@preact/signals";
import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const ListaCompra: FunctionComponent = () => {
    const lista = useSignal<string[]>([]);
    return (
        <>
        <Add lista = {lista} />
        <Show lista = {lista} />
        </>
    );
};

export default ListaCompra;

const Add: FunctionComponent<{ lista: Signal<string[]> }> = ({ lista }) => {
  const [item, setItem] = useState<string>("");
  return (
    <>
      <input value={item} onInput={(e) => setItem(e.currentTarget.value)} />
      <button
        onClick={() => {
          lista.value = [...lista.value, item];
          setItem("");
        }}
      >
        Añadir
      </button>
    </>
  );
};

const Show: FunctionComponent<{ lista: Signal<string[]> }> = ({ lista }) => {
    return <ul>{lista.value.map((l) => <li>{l}</li>)}</ul>;
};