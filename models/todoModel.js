import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllTodos() {
	const todos = await prisma.todo.findMany({
		where: {
			deletedAt: null,
		},
	});
	return todos;
}

export default {
	getAllTodos,
};
