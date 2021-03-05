import React, { useState } from "react";
function TextInput(props) {
  const [text, setText] = useState(props.text);
  const [isEditMode, setIsEditMode] = useState(props.editMode);

  const openEdit = () => {
    if (text) {
      setIsEditMode(!isEditMode);
    }
  };

  return (
    <div
      className={`${props.classNameComponent}
      flex w-full mr-1`}
    >
      <div className="w-full">
        {isEditMode ? (
          <input
            className={`${props.classNameInput} w-full px-2`}
            onChange={(event) => setText(event.target.value)}
            onBlur={() => openEdit()}
            value={text}
            placeholder={props.placeholderText}
          ></input>
        ) : (
          <p
            onClick={() => openEdit()}
            className={`${props.classNameText} w-min   px-2`}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
export default TextInput;
