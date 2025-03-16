import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const task_list = [
  {
    id: "TASK01",
    name: "empty_name",
    discription: "empty_discription",
    status: "empty_status",
    category: "empty_category",
  },
];

export function TaskTable({ tasks }: { tasks: Task[] }) {
  return (
    <Table>
      <TableCaption>A list of all your tasks</TableCaption>
      <TableHeader>
        <TableRow>
          {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
          <TableHead>Task Name</TableHead>
          <TableHead>Discription</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Category</TableHead>
          {/* <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            {/* <TableCell className="font-medium">{task.id}</TableCell> */}
            <TableCell>{task.name}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.status}</TableCell>
            <TableCell className="text-right">{task.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow> */}
      </TableFooter>
    </Table>
  );
}
interface Task {
  id: number;
  name: String;
  description: String;
  status: String;
  category: String;
}
export default function TaskTablePage() {
  const [tasks, setTasks] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:18080/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(tasks);
  return (
    <div>
      <TaskTable tasks={tasks} />
    </div>
  );
}
