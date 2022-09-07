import { FC, useState } from "react";

interface FormProps {
  title: string;
  handleClick: (name: string, password: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type=" text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Имя пользователя"
      />
      <input
        type="password"
        required
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Пароль"
      />
      <button onClick={() => handleClick(name, pass)}>{title}</button>
    </form>
  );
};

export { Form };
