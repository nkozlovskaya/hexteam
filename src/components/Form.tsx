import { FC, useState } from "react";

interface FormProps {
  title: string;
  handleClick: (name: string, password: string) => void;
}

const Form: FC<FormProps> = ({ handleClick }) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form">
      <input
        type=" text"
        className="form__input"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        className="form__input"
        required
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
      />
      <button className="form__btn" onClick={() => handleClick(name, pass)}>
        Send
      </button>
    </form>
  );
};

export { Form };
