import { Router } from "express";

import todoController from "../controllers/todoController.js";

const router = Router();

router.get("/", todoController.getAll);

export default router;
