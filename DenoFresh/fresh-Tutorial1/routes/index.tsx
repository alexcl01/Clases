export default function Home() {
  console.log("Ejecutando en el servidor");
  const a = 3;
  const b = 6;
  return (
    <div class>
      Hola Mundo, la suma de {a} + {b} es {a + b}
      A es mayor que B: { a > b ? "Sí" : "No" }
    </div>
  );
}
