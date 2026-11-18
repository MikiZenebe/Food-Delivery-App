interface StatusBadgeProps {
  label: string;
  status?: "online" | "offline" | "warning";
}

const statusStyles = {
  online: "text-emerald-400",
  offline: "text-zinc-500",
  warning: "text-amber-400",
};

const dotStyles = {
  online: "bg-emerald-400",
  offline: "bg-zinc-500",
  warning: "bg-amber-400",
};

export function StatusBadge({ label, status = "online" }: StatusBadgeProps) {
  return (
    <div className={`flex items-center gap-2 text-xs ${statusStyles[status]}`}>
      <span className={`h-2 w-2 rounded-full ${dotStyles[status]}`} />
      <span>{label}</span>
    </div>
  );
}
