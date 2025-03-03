import React from "react";
import { observer } from "mobx-react-lite";
import TaskStore from "./store/TaskStore";
import TaskItem from "./components/TaskItem";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const App: React.FC = observer(() => {
  const handleAddTask = () => {
    const title = prompt("Введите название задачи:");
    if (title) {
      TaskStore.addTask(title);
    }
  };

  return (
    <AppContainer>
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <h1>Список задач</h1>
        <button onClick={handleAddTask}>Добавить задачу</button>
        {TaskStore.tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </AppContainer>
  );
});

export default App;
