import { useState } from "react";
import { Search, Bell, Wallet, Menu, X } from "lucide-react";

interface TopbarProps {
  onMenuClick?: () => void;
  mobileMenuOpen?: boolean;
}

export function Topbar({ onMenuClick, mobileMenuOpen = false }: TopbarProps) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="flex h-[68px] items-center justify-between gap-4 border-b border-[var(--border)] bg-[var(--background)] px-4 sm:px-6">
      {/* Left section */}
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        <div className="hidden items-center gap-2 text-sm text-zinc-500 sm:flex">
          <span>GhostChat</span>
          <span>/</span>
          <span className="text-zinc-200">Workspace</span>
        </div>
      </div>

      {/* Search */}
      <div className="hidden max-w-md flex-1 md:block">
        <div className="relative mx-auto max-w-[380px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

          <input
            type="text"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search people, messages..."
            className="h-10 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] pl-9 pr-4 text-sm text-white outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="relative rounded-xl p-2.5 text-zinc-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Notifications"
        >
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
        </button>

        <button
          type="button"
          className="flex h-10 items-center gap-2 rounded-xl bg-violet-600 px-3 text-sm font-medium text-white transition hover:bg-violet-700"
        >
          <Wallet className="h-4 w-4" />
          <span className="hidden sm:inline">Connect wallet</span>
          <span className="sm:hidden">Connect</span>
        </button>
      </div>
    </header>
  );
}
