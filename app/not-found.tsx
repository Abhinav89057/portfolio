import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] max-w-6xl flex-col items-start justify-center px-5 pt-16 md:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404 / route not found</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">This node is not in the system.</h1>
      <Link href="/" className="mt-8 inline-flex min-h-11 items-center rounded-full bg-fg px-6 text-sm font-medium text-bg">Back to start</Link>
    </div>
  );
}
