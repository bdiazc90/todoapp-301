import todoModel from "../models/todoModel.js";

async function getAll(req, res) {
	const todos = await todoModel.getAllTodos();
	return res.json(todos);
}

export default {
	getAll,
};
