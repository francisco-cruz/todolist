const routes = require("express").Router();
const { Module } = require("module");
const TaskController = require("../controller/TaskController");

routes.get("/home", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id", TaskController.getById);
routes.post("/updateOne/:id", TaskController.updateOneTask)

module.exports = routes;
