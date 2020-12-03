const express=require("express");
const userController=require("../Controller/user.controller");

const router=express.Router();

router.get("/",userController.GetAllUser);

router.post("/",userController.CreateUser);

router.get("/:id",userController.GetUserById);

router.put("/:id",userController.UpdateUserById);

router.delete("/:id",userController.DeleteUserById);

module.exports=router;