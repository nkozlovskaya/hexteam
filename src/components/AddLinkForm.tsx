import { FC } from "react";

interface AddLinkProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

export const AddLinkForm: FC<AddLinkProps> = ({
  value,
  updateText,
  handleAction,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="add-link">
      <input
        type="text"
        value={value}
        placeholder="Squeeze link"
        className="add-link_input"
        onChange={(e) => updateText(e.target.value)}
      />

      <button onClick={handleAction} className="add-link_btn">
        Create link
      </button>
    </form>
  );
};
