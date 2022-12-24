const routes = require("express").Router();
const { Module } = require("module");
const TaskController = require("../controller/TaskController");

routes.get("/home", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id/:method", TaskController.getById);
routes.post("/updateOne/:id", TaskController.updateOneTask)
routes.get("/deleteOne/:id", TaskController.deleteOneTask);
routes.get("/check/:id", TaskController.taskCheck);



module.exports = routes;
