import { Schema, model } from "mongoose";

interface UItask {
    title: string;
    content: string;
    completed: boolean;
    start_date: Date;
    end_date: Date;
}

const taskSchema = new Schema<UItask>({
    title: { type: "string", required: true },
    content: { type: "string", required: true },
    completed: { type: "boolean", required: true, default: false },
    start_date: { type: "date", required: true, default: new Date() },
    end_date: { type: "date", required: false, default: undefined },
});

const tasks = model("task", taskSchema);

export default tasks;