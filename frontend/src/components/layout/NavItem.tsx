import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface NavItemProps {
  to: string;
  label: string;
  icon: LucideIcon;
  end?: boolean;
  onClick?: () => void;
}

export function NavItem({
  to,
  label,
  icon: Icon,
  end = false,
  onClick,
}: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
          isActive
            ? "bg-violet-500/10 text-violet-300"
            : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-100"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className={`h-[18px] w-[18px] ${
              isActive
                ? "text-violet-400"
                : "text-zinc-500 group-hover:text-zinc-300"
            }`}
          />
          <span className="flex-1">{label}</span>
        </>
      )}
    </NavLink>
  );
}
