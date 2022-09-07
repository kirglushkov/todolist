import { useState } from "react";

function Item({ index, editTask, edit, defaultValue }) {
  const [Edited, setEdited] = useState("" || defaultValue);

  return (
    <div>
      <input
        value={Edited}
        onChange={(evt) => {
          setEdited(evt.target.value);
        }}
      />
      <button
        onClick={() => {
          editTask(index, Edited);
          edit(false);
        }}
      >
        ?
      </button>
    </div>
  );
}

export default Item;
