import {
  MessageSquare,
  Users,
  ShieldCheck,
  ArrowUpRight,
  Plus,
  LockKeyhole,
} from "lucide-react";

const stats = [
  {
    label: "Conversations",
    value: "0",
    description: "Your active conversations",
    icon: MessageSquare,
  },
  {
    label: "Contacts",
    value: "0",
    description: "Connected contacts",
    icon: Users,
  },
  {
    label: "Communities",
    value: "0",
    description: "Communities joined",
    icon: ShieldCheck,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page heading */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-sm text-zinc-500">Your private workspace</p>
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Welcome to GhostChat
          </h1>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">
            A messaging space where your identity belongs to you.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-700">
          <Plus className="h-4 w-4" />
          New conversation
        </button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-violet-500/20"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                  <Icon className="h-5 w-5 text-violet-400" />
                </div>

                <ArrowUpRight className="h-4 w-4 text-zinc-600" />
              </div>

              <p className="text-sm text-zinc-500">{stat.label}</p>
              <h2 className="mt-1 text-3xl font-semibold text-white">
                {stat.value}
              </h2>
              <p className="mt-2 text-xs text-zinc-600">{stat.description}</p>
            </div>
          );
        })}
      </div>

      {/* Welcome panel */}
      <div className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.09] via-[var(--surface)] to-[var(--surface)] p-6 sm:p-8">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/[0.06] blur-3xl" />

        <div className="relative max-w-2xl">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15">
            <LockKeyhole className="h-6 w-6 text-violet-400" />
          </div>

          <h2 className="text-xl font-semibold text-white">
            Your conversations. Your keys. Your privacy.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            GhostChat is designed around privacy and decentralized identity.
            Connect your wallet to begin building your messaging identity.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">
            Connect wallet
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Empty conversations */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
        <div className="border-b border-[var(--border)] px-5 py-4">
          <h2 className="text-sm font-semibold text-zinc-200">
            Recent conversations
          </h2>
        </div>

        <div className="flex min-h-[220px] flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800/70">
            <MessageSquare className="h-5 w-5 text-zinc-500" />
          </div>

          <p className="text-sm font-medium text-zinc-300">
            No conversations yet
          </p>

          <p className="mt-2 max-w-sm text-xs leading-5 text-zinc-500">
            Start a conversation to see your private messages here.
          </p>
        </div>
      </div>
    </div>
  );
}
