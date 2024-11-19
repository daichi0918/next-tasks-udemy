import { TaskDocument, TaskModel } from '@/models/task';
import { connectDb } from '@/utils/database';

export const GET = async () => {
  try {
    await connectDb();
    const allTasks: TaskDocument[] = await TaskModel.find();
  } catch (error) {}
};
