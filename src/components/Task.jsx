import React, { useState } from "react";
import TextInput from "./TextInput";
import { useDataContext } from "../App";

function Task(props) {
	const { removeTaskById } = useDataContext();
	const [title, setTitle] = useState(props.title);
	const [description, setDescription] = useState(props.description);
	const [color, setColor] = useState("bg-white");
	const [isEditMode, setIsEditMode] = useState(props.editMode);

	const openEdit = () => setIsEditMode(!isEditMode);

	return (
		<div className={`border m-2 rounded-xl shadow `}>
			<div className={`p-2  border-b flex rounded-t-xl ${color}`}>
				<div className={`w-full`}>
					<TextInput
						text={title}
						editMode={true}
						classNameComponent={``}
						classNameText={``}
						classNameInput={`border-b focus:outline-none ${color}`}
						classNameButton={`ml-3 border rounded w-7 h-7 focus:outline-none shadow`}
						label="..."
						placeholderText="Задача"
					/>
				</div>
				<div className={`${color} w-9 h-7 focus:outline-none rounded ml-2 relative border shadow`} onClick={openEdit}>
					{isEditMode ? (
						<div className={`bg-white border rounded p-1 absolute right-0 flex shadow-2xl`}>
							<div onClick={() => setColor("bg-red-500")} className="bg-red-500 w-7 h-7 focus:outline-none rounded border m-2 shadow"></div>
							<div onClick={() => setColor("bg-green-500")} className="bg-green-500 w-7 h-7 focus:outline-none rounded border m-2 shadow"></div>
							<div onClick={() => setColor("bg-blue-500")} className="bg-blue-500 w-7 h-7 focus:outline-none rounded border m-2 shadow"></div>
							<div onClick={() => setColor("bg-yellow-500")} className="bg-yellow-500 w-7 h-7 focus:outline-none rounded border m-2 shadow"></div>
							<div onClick={() => setColor("bg-white")} className="bg-white w-7 h-7 focus:outline-none rounded border m-2 shadow"></div>
						</div>
					) : (
						<></>
					)}
				</div>
				<button
					className={`${color} text-center w-9 h-7 focus:outline-none rounded ml-2 relative border shadow`}
					onClick={() => removeTaskById(props.id, props.idTask)}
				>
					X
				</button>
			</div>
			<div className={`p-3 rounded-b-xl bg-white`}>
				<TextInput
					text={description}
					classNameComponent={``}
					classNameInput={`border-b focus:outline-none`}
					classNameButton={`ml-2 border rounded w-7 h-7 focus:outline-none shadow`}
					editMode={true}
					label="..."
					placeholderText="Описание"
				/>
			</div>
		</div>
	);
}
export default Task;
