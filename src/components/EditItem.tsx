import { useState } from "react";
import CustomButton from "./CustomButton";
import Confirm from "../img/confirm.svg";

function EditItem({ index, editTask, edit, defaultValue }) {
  const [Edited, setEdited] = useState("" || defaultValue);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 5px 5px 5px",
        backgroundColor: "black",
        borderRadius: "10px",
        border: "none",
        margin: "0 auto",
        marginBottom: "10px",
        width: "220px",
      }}
    >
      <input
        style={{
          border: "none",
          borderRadius: "10px",
          width: "75%",
          outline: "none",
        }}
        value={Edited}
        onChange={(evt) => {
          setEdited(evt.target.value);
        }}
      />
      <CustomButton
        icon={Confirm}
        onclick={() => {
          editTask(index, Edited);
          edit(false);
        }}
      >
        ?
      </CustomButton>
    </div>
  );
}

export default EditItem;
