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

interface TaskTableProp {
  isLoad: boolean;
  tasks: Task[];
}

// export function TaskTable({ prop }: { tasks: Task[]; isLoad: boolean }) {
export function TaskTable(prop: TaskTableProp) {
  console.log("prop", prop);

  if (!prop.isLoad) {
    return <>is loading</>;
  }
  //    return (
  //       <div>
  //           table:
  //           <table>
  //               <tr>
  //               <td>{prop.tasks[0]?.id}</td>
  //               <td>{prop.tasks[0]?.name}</td>
  //           </tr>
  //           </table>
  //       </div>
  //   )
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
        {prop &&
          prop?.tasks &&
          prop?.tasks?.map((task) => (
            <TableRow key={task?.id}>
              {/* <TableCell className="font-medium">{task.id}</TableCell> */}
              <TableCell>{task?.name}</TableCell>
              <TableCell>{task?.description}</TableCell>
              <TableCell>{task?.status}</TableCell>
              <TableCell className="text-right">
                {task?.category?.name}
              </TableCell>
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
interface Task {
  id: number;
  name: String;
  description: String;
  status: String;
  category: Category;
}
interface Category {
  id: number;
  name: string;
}

export default function App() {
  const [tasks, setTasks] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (!isLoad) {
      fetch("http://localhost:18090/tasks")
        .then((res) => res.json())
        .then((data) => {
          setTasks(() => data);
          // setIsLoad(true);
          setIsLoad((prev) => !prev);
        })
        .catch((err) => console.log(err));
    }
  }, [isLoad, setTasks, setIsLoad]);
  console.log(tasks[0]);
  return (
    <div className="w-screen h-screen  flex flex-col justify-center items-center">
      <TaskTable tasks={tasks} isLoad={isLoad} />
    </div>
  );
}
