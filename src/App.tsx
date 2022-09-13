import { useCallback, useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import Todos from "./components/Todos";
import MainPanel from "./components/MainPanel";
import Header from "./components/Header";
import AddItem from "./components/AddItem";

function App() {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setinputValue] = useState<string>("");

  const addTask = useCallback(() => {
    if (!inputValue) return;
    setList([...list, inputValue]);
    setinputValue("");
  }, [inputValue]);

  const deleteTask = useCallback(
    (index: number) => {
      const newList = [...list];
      newList.splice(index, 1);
      setList(newList);
    },
    [list]
  );

  const editTask = useCallback(
    (index: number, value: string) => {
      const newList = [...list];
      newList[index] = value;
      setList(newList);
    },
    [list]
  );

  const UseStateHelper = (a: string) => {
    setinputValue(a);
  };

  const GridColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
  `;

  return (
    <div>
      <Header>Список задач:</Header>
      <AddItem
        inputvalue={inputValue}
        setinputvalue={UseStateHelper}
        addtask={addTask}
      />
      <GridColumns>
        {list.map((item, index) => (
          <MainPanel key={index}>
            <Todos editTask={editTask} deleteTask={deleteTask} index={index}>
              {item}
            </Todos>
          </MainPanel>
        ))}
      </GridColumns>
    </div>
  );
}

export default App;
