import Item from "./Item";
import { useState } from "react";
import styled from "@emotion/styled";

function Todos({ children, index, editTask, deleteTask }: any) {
  const Editted = (a: boolean) => {
    setIsEdit(a);
  };

  const StyledDiv = styled.div`
    width: 220px;
    height: 40px;
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
    position: relative;
  `;

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {!isEdit ? (
        <StyledDiv>
          {children}
          <Wrapper>
            <button onClick={() => Editted(true)}>?</button>
            <button
              onClick={() => {
                deleteTask(index);
              }}
            >
              -
            </button>
          </Wrapper>
        </StyledDiv>
      ) : (
        <Item
          index={index}
          editTask={editTask}
          edit={Editted}
          defaultValue={children}
        ></Item>
      )}
    </div>
  );
}

export default Todos;
