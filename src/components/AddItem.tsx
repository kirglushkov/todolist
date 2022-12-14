import CustomButton from "./CustomButton";
import Plus from "../img/plus.svg";

type AddItemProps = {
  addtask: () => void;
  inputvalue: string;
  setinputvalue: (a: string) => void;
};

function AddItem({ setinputvalue, addtask, inputvalue }: AddItemProps) {
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
          width: "Calc(Min(100%, 220px) - 45px)",
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
      <CustomButton width={35} icon={Plus} onclick={addtask} />
    </div>
  );
}

export default AddItem;
