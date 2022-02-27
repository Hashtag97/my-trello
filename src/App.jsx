import React, { useState } from "react";
import { v4 } from "uuid";
import "./App.css";
import Board from "./components/Board";

export const DataContext = React.createContext();
export const useDataContext = () => React.useContext(DataContext);


const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);

	const add = () =>
		setData(
			data.concat({
				id: v4(),
				tasks: [],
			})
		);

	const removeById = (id) => setData(data.filter((item) => item.id !== id));

	const addTask = (id) => {
		setData(
			data.map((item) =>
				item.id === id
					? {
							...item,
							tasks: item.tasks.concat({
								id: v4(),
							}),
					  }
					: item
			)
		);
	};

	const removeTaskById = (id, idTask) =>
		setData(
			data.map((item) =>
				item.id === id
					? {
							...item,
							tasks: item.tasks.filter((task) => task.id !== idTask),
					  }
					: item
			)
		);

	return (
		<DataContext.Provider
			value={{
				data,
				add,
				removeById,
				addTask,
				removeTaskById,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

function App() {
	return (
		<DataProvider>
			<Board />
		</DataProvider>
	);
}

export default App;
