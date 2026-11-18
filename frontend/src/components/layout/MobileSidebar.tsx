import { X } from "lucide-react";
import { Sidebar } from "./Sidebar";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close navigation"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 left-0 w-[280px] animate-in slide-in-from-left border-r border-zinc-800 bg-[var(--surface)] duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white"
          aria-label="Close sidebar"
        >
          <X className="h-4 w-4" />
        </button>

        <Sidebar onNavigate={onClose} />
      </div>
    </div>
  );
}
