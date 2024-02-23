import { FunctionComponent, JSX } from "preact";

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {                // ya tiene todos los atributos de los botones, y le añadimos que pueda recibir
  variant: "primary" | "secondary";                                         // un atributo (variant) con dos valores posibles (primary, secondary)
};

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { variant, children, ...rest } = props;
  return (
    <button class={`button button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;