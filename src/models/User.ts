import { Schema, TagSet, model } from "mongoose";

interface UIuser {
    name: string,
    email: string,
    password: string,
    phone_number: string,
    age: number,
    tasks: []
}

const userSchema = new Schema<UIuser>({
    name:  { type: "string", required: true },
    email:  { type: "string", required: true },
    password:  { type: "string", required: true },
    phone_number:  { type: "string", required: true },
    age:  { type: "number", required: true, min: 18 },
    tasks:  { type: [], required: false, default: [] }
});

const users = model("user", userSchema);

export default users;