import EditItem from "./EditItem";
import { useState } from "react";
import styled from "@emotion/styled";
import CustomButton from "./CustomButton";
import Edit from "../img/edit.svg";
import Cross from "../img/cross.svg";

type TodosProps = {
  children: string;
  index: number;
  deleteTask: (index: number) => void;
  editTask: (index: number, value: string) => void;
};

function Todos({ children, index, editTask, deleteTask }: TodosProps) {
  const Editted = (a: boolean) => {
    setIsEdit(a);
  };

  const StyledDiv = styled.div`
    width: 220px;
    padding: 5px 5px 5px 5px;

    display: flex;
    align-items: center;
    background: ${(props) => props.color};
    border-radius: 5px;
    color: white;
    align-items: center;
    justify-content: space-between;
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 3px;
    margin-left: 5px;
  `;

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {!isEdit ? (
        <StyledDiv color="black">
          <div style={{ marginLeft: "1%", maxWidth: "20px" }}>
            {children.length > 22 ? children.slice(0, 19) + "..." : children}
          </div>
          <Wrapper>
            <CustomButton
              icon={Edit}
              width={21}
              onclick={() => Editted(true)}
            ></CustomButton>
            <CustomButton
              icon={Cross}
              width={21}
              onclick={() => {
                deleteTask(index);
              }}
            ></CustomButton>
          </Wrapper>
        </StyledDiv>
      ) : (
        <EditItem
          index={index}
          editTask={editTask}
          edit={Editted}
          defaultValue={children}
        ></EditItem>
      )}
    </div>
  );
}

export default Todos;
