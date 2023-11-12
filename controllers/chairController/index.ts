import { Router } from "express";
import { getById } from "./methods/getById";
import { getAll } from "./methods/getAll";
import { post } from "./methods/post";
import { put } from "./methods/put";
import { del } from "./methods/del";


const router = Router()

const chairController = {
  getById: getById,
  getAll: getAll,
  post: post,
  put: put,
  delete: del
}

router.get("/:id", chairController.getById);
router.get("/", chairController.getAll);
router.post("/", chairController.post);
router.put("/:id", chairController.put);
router.delete("/:id", chairController.delete);

export default router;