import React, { useState } from "react";
import Task from "./Task";
import TextInput from "./TextInput";
import { Draggable } from "react-beautiful-dnd";
import { useDataContext } from "../App";

function Column(props) {
  const { data, removeById, addTask } = useDataContext();
  const [title] = useState(props.title);

  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-96 h-full border rounded-xl shadow-xl m-2 bg-white"
        >
          <div className="p-2 border-b bg-gray-100 rounded-t-xl flex justify-between">
            <TextInput
              text={title}
              editMode={true}
              classNameComponent={``}
              classNameText={``}
              classNameInput={`border-b focus:outline-none bg-gray-100`}
              classNameButton={`ml-3 border rounded  w-7 h-7 focus:outline-none shadow bg-white`}
              label="..."
              placeholderText="Заголовок"
            />
            <button
              className="ml-12 bg-white w-max border rounded px-4 shadow focus:outline-none"
              onClick={() => removeById(props.id)}
            >
              <p className="">Удалить</p>
            </button>
          </div>
          <div className="px-2 pt-2">
            {data
              .find((item) => item.id === props.id)
              .tasks.map((task, index) => (
                <Task
                  key={task.id}
                  idTask={task.id}
                  id={props.id}
                  index={index}
                />
              ))}
            <button
              className="bg-white w-max border rounded-xl m-2 px-4 mb-4 shadow focus:outline-none"
              onClick={() => addTask(props.id)}
            >
              <p className="">Добавить задачу</p>
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
export default Column;
