import {
  LayoutDashboard,
  MessageSquare,
  Users,
  UserRound,
  Compass,
  ShieldCheck,
  Settings,
  ChevronDown,
  Plus,
  Globe,
} from "lucide-react";

import { Logo } from "../shared/Logo";
import { NavItem } from "./NavItem";

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="flex h-full w-[260px] flex-col border-r border-[var(--border)] bg-[var(--surface)]">
      {/* Brand */}
      <div className="flex h-[68px] items-center border-b border-[var(--border)] px-5">
        <Logo />
      </div>

      {/* Scrollable navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-5">
        {/* Main */}
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-600">
          Workspace
        </p>

        <div className="space-y-1">
          <NavItem
            to="/app"
            label="Dashboard"
            icon={LayoutDashboard}
            end
            onClick={onNavigate}
          />

          <NavItem
            to="/app/messages"
            label="Messages"
            icon={MessageSquare}
            onClick={onNavigate}
          />

          <NavItem
            to="/app/requests"
            label="Message requests"
            icon={Users}
            onClick={onNavigate}
          />
        </div>

        {/* Social */}
        <p className="mb-3 mt-8 px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-600">
          Social
        </p>

        <div className="space-y-1">
          <NavItem
            to="/app/contacts"
            label="Contacts"
            icon={UserRound}
            onClick={onNavigate}
          />

          <NavItem
            to="/app/discover"
            label="Discover"
            icon={Compass}
            onClick={onNavigate}
          />

          <NavItem
            to="/app/communities"
            label="Communities"
            icon={Globe}
            onClick={onNavigate}
          />
        </div>

        {/* Security */}
        <p className="mb-3 mt-8 px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-600">
          Account
        </p>

        <div className="space-y-1">
          <NavItem
            to="/app/profile"
            label="My profile"
            icon={UserRound}
            onClick={onNavigate}
          />

          <NavItem
            to="/app/settings"
            label="Settings"
            icon={Settings}
            onClick={onNavigate}
          />

          <NavItem
            to="/app/settings/security"
            label="Security & privacy"
            icon={ShieldCheck}
            onClick={onNavigate}
          />
        </div>

        {/* Conversations quick list */}
        <div className="mb-3 mt-8 flex items-center justify-between px-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-600">
            Recent chats
          </p>

          <button
            type="button"
            className="rounded-md p-1 text-zinc-500 transition hover:bg-white/5 hover:text-white"
            title="New conversation"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <div className="rounded-xl border border-dashed border-zinc-800 px-3 py-4">
          <p className="text-xs text-zinc-500">
            Your conversations will appear here once you start messaging.
          </p>
        </div>
      </div>

      {/* Network information */}
      <div className="border-t border-[var(--border)] p-3">
        <div className="flex items-center justify-between rounded-xl bg-zinc-900/70 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-violet-400" />
            <span className="text-xs text-zinc-300">Base Sepolia</span>
          </div>

          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
      </div>

      {/* User footer placeholder */}
      <button
        type="button"
        className="flex items-center gap-3 border-t border-[var(--border)] px-4 py-4 text-left transition hover:bg-white/[0.03]"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-sm font-semibold text-violet-300">
          G
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-zinc-200">
            Guest User
          </p>
          <p className="text-xs text-zinc-500">Wallet not connected</p>
        </div>

        <ChevronDown className="h-4 w-4 text-zinc-500" />
      </button>
    </aside>
  );
}
