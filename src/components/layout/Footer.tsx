import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto w-full max-w-5xl px-6 text-sm text-ink-soft md:px-8">
        <p>
          {site.name} — {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}