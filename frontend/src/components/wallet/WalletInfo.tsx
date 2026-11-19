import { useConnection } from "wagmi";

export const WalletInfo = () => {
  const { address, isConnected, chain } = useConnection();

  if (!isConnected || !address) {
    return <div className="text-sm text-zinc-500">Wallet not connected</div>;
  }

  return (
    <div className="space-y-1">
      <p className="text-sm font-medium text-zinc-200">
        {address.slice(0, 6)}...{address.slice(-4)}
      </p>

      <p className="text-xs text-zinc-500">
        {chain?.name ?? "Unknown network"}
      </p>
    </div>
  );
};
