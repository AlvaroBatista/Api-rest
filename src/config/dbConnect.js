import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alvaro:123@node.euoh4ju.mongodb.net/node")

let db = mongoose.connection

export default db
