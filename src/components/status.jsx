import { useSelector } from "react-redux";

function Status({ id }) {
  const items = useSelector((state) => state.details.items);
  const statusMap = useSelector((state) => state.status.statusMap);

  const item = items.find((task) => task.id === id);
  if (!item) return null;

  const currentStatus = statusMap[id] || "pending";

  const today = new Date().setHours(0, 0, 0, 0);
  const due = new Date(item.date).setHours(0, 0, 0, 0);

  const label =
    currentStatus === "completed" ? "completed" : due < today ? "OverDue" : "pending";
 
  const color =
    label === "completed"
      ? "text-green-400"
      : label === "OverDue"
      ? "text-red-500 "
      : " text-amber-400";

  return (
    <div className={`overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 p-1 mb-2 w-40 text-center font-medium rounded-sm ${color}`}>
      {label}
    </div>
  );
}

export default Status;