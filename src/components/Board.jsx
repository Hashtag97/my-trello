import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
import { v4 } from "uuid";

import { useDataContext } from "../App";

function Board() {
  const { data, add } = useDataContext();

  return (
    <>
      <div className="flex">
        <button
          className="ml-2 mt-2 border rounded-xl px-3 py-1 shadow focus:outline-none"
          onClick={() => add()}
        >
          Добавить Список
        </button>
      </div>
      <DragDropContext>
        <Droppable droppableId={v4()}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-nowrap"
            >
              {provided.placeholder}
              {data.map((item, index) => (
                <Column key={item.id} id={item.id} index={index} />
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default Board;
