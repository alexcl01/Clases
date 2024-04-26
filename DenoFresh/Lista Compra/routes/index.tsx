import { useSignal } from "@preact/signals";
import ListaCompra from "../islands/ListaCompra.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
     <ListaCompra/>
    </div>
  );
}
