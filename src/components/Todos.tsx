import EditItem from "./EditItem";
import { useState } from "react";
import styled from "@emotion/styled";
import CustomButton from "./CustomButton";
import Edit from "../img/edit.svg";
import Cross from "../img/cross.svg";

function Todos({ children, index, editTask, deleteTask }: any) {
  const Editted = (a: boolean) => {
    setIsEdit(a);
  };

  const StyledDiv = styled.div`
    width: 220px;
    padding: 5px 5px 5px 5px;
    left: 50px;
    top: 54px;
    display: flex;
    align-items: center;
    background: #000000;
    border-radius: 5px;
    color: #ffffff;
    align-items: center;
    justify-content: space-between;
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 3px;
  `;

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {!isEdit ? (
        <StyledDiv>
          <div style={{ marginLeft: "2%" }}>{children}</div>
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
