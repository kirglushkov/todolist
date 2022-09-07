import styled from "@emotion/styled";
import CustomButton from "./CustomButton";

import Cross from "../img/cross.svg";
import Edit from "../img/edit.svg";
import Plus from "../img/plus.svg";
import Confirm from "../img/confirm.svg";

function AddItem({ setinputvalue, addtask, inputvalue }: any) {
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
      }}
    >
      <input
        style={{
          border: "none",
          borderRadius: "10px",
          width: "80%",
          outline: "none",
        }}
        type="text"
        value={inputvalue}
        onChange={(e) => {
          setinputvalue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addtask();
          }
        }}
      />
      <CustomButton width={35} icon={Plus} addtask={addtask} />
    </div>
  );
}

export default AddItem;
