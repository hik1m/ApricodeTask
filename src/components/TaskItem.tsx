import styled from "styled-components";
import Task from "../models/Task";
import React from "react";
import { useObserver } from "mobx-react-lite";

const TaskItemContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TaskItemLabel = styled.label`
  display: flex;
  align-items: center;
`;

const TaskItemCheckbox = styled.input`
  margin-right: 5px;
`;

const TaskItemButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #a9a9a9;
  color: #fff;
  cursor: pointer;
`;

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const handleToggle = () => {
    task.toggleCompleted();
  };

  const handleAddSubtask = () => {
    const title = prompt("Введите название подзадачи:");
    if (title) {
      task.addSubtasks(title);
    }
  };

  return useObserver(() => (
    <TaskItemContainer>
      <TaskItemLabel>
        <TaskItemCheckbox
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />
        {task.title}
      </TaskItemLabel>
      <TaskItemButton onClick={handleAddSubtask}>
        Добавить подзадачу
      </TaskItemButton>
      {task.subtasks.map((subtask) => (
        <TaskItem key={subtask.id} task={subtask} />
      ))}
    </TaskItemContainer>
  ));
};

export default TaskItem;
