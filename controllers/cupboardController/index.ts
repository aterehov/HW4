import { Router } from "express";
import { getById } from "./methods/getById";
import { getAll } from "./methods/getAll";
import { post } from "./methods/post";
import { put } from "./methods/put";
import { del } from "./methods/del";


const router = Router()

const cupboardController = {
  getById: getById,
  getAll: getAll,
  post: post,
  put: put,
  delete: del
}

router.get("/:id", cupboardController.getById);
router.get("/", cupboardController.getAll);
router.post("/", cupboardController.post);
router.put("/:id", cupboardController.put);
router.delete("/:id", cupboardController.delete);

export default router;