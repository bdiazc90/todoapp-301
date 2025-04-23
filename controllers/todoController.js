import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAll(req, res) {
	const todos = await prisma.todo.findMany();
	return res.json(todos);
}

export default {
	getAll,
};
