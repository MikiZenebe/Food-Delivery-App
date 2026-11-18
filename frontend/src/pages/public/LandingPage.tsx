import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Ghost<span className="text-violet-500">Chat</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/features"
            className="text-sm text-zinc-400 hover:text-white"
          >
            Features
          </Link>

          <Link
            to="/security"
            className="text-sm text-zinc-400 hover:text-white"
          >
            Security
          </Link>

          <Link
            to="/connect"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium hover:bg-violet-500"
          >
            Connect Wallet
          </Link>
        </div>
      </nav>

      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
        <div className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          Messaging without boundaries
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Your conversations.
          <br />
          <span className="text-violet-500">Your identity. Your freedom.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Connect with people, communicate privately, and build communities. No
          phone number required. Your wallet is your identity.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/connect"
            className="rounded-xl bg-violet-600 px-6 py-3 font-medium hover:bg-violet-500"
          >
            Get Started
          </Link>

          <Link
            to="/features"
            className="rounded-xl border border-zinc-700 px-6 py-3 font-medium hover:bg-zinc-800"
          >
            Explore Features
          </Link>
        </div>

        <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: "Private messaging",
              description: "Encrypted conversations designed for privacy.",
            },
            {
              title: "Wallet identity",
              description: "Connect with your Web3 identity.",
            },
            {
              title: "Open communities",
              description: "Create and participate in communities.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 text-left"
            >
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
