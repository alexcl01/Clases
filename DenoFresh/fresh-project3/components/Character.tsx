import { FunctionComponent } from "preact";

type CharacterProps = {
  name: string;
  image: string;
  status: string;
};

const Character: FunctionComponent<CharacterProps> = (props) => {
  const { name, image, status } = props;
  return (
    <>
    <div class="characterContainer">
        <h2 class="text-1line"><strong>{name}</strong></h2>
        <img class="img shape" src={image} />
        <p>
            <strong>Status: </strong>
            {status}
        </p>
      </div>
    </>
  );
};

export default Character;