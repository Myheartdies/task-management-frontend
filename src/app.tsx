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
    name: "Progress meeting",
    discription: "Report on progress",
    status: "Ongoing",
    category: "Meeting",
  },
  {
    id: "TASK02",
    name: "API development",
    discription: "Rest api controller development",
    status: "OnHold",
    category: "Development",
  },
];

export function TaskTable({ tasks }: TasksListProps) {
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
        {tasks.tasks.map((task) => (
          <TableRow key={task.id}>
            {/* <TableCell className="font-medium">{task.id}</TableCell> */}
            <TableCell>{task.name}</TableCell>
            <TableCell>{task.discription}</TableCell>
            <TableCell>{task.status}</TableCell>
            <TableCell className="text-right">{task.category}</TableCell>
            {/* <TableCell>{task.discription}</TableCell> */}
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
type Task = {
  name: String;
  discription: String;
  status: String;
};
interface TasksListProps {
  tasks: Task[]; // Array of Task objects
}
export default function App() {
  const [tasks, setTasks] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:18080/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(tasks);
  return (
    <div className="w-screen h-screen  flex flex-col justify-center items-center">
      <TaskTable tasks={tasks} />
    </div>
  );
}
