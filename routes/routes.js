const routes = require("express").Router();
const { Module } = require("module");
const TaskController = require("../controller/TaskController");

routes.get("/home", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);

module.exports = routes;
