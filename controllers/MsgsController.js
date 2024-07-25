const asyncHandler = require("express-async-handler")
const Msgs = require("../models/Msgs")
// const Todo = require("../model/Todo")

exports.getAllTodos = asyncHandler(async (req, res) => {
    const result = await Msgs.find()
    res.json({ message: "Todo Fetch Success", result })
})
exports.addTodo = asyncHandler(async (req, res) => {
    await Msgs.create(req.body)
    res.json({ message: "Todo Add Success" })
})
