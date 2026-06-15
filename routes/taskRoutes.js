const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Get all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Create task
router.post("/", async (req, res) => {
  const task = new Task({
    title: req.body.title
  });

  const savedTask = await task.save();
  res.json(savedTask);
});

module.exports = router;