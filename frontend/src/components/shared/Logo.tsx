import { MessageCircle } from "lucide-react";

interface LogoProps {
  compact?: boolean;
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-950/40">
        <MessageCircle className="h-5 w-5 text-white" />
      </div>

      {!compact && (
        <div>
          <span className="text-lg font-bold tracking-tight text-white">
            GhostChat
          </span>
          <p className="text-[10px] tracking-[0.18em] text-zinc-500">
            DECENTRALIZED MESSAGING
          </p>
        </div>
      )}
    </div>
  );
}
