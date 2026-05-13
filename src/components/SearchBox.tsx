import { Search } from "lucide-react";

export function SearchBox() {
  return (
    <form action="/" className="rounded-2xl border border-oat bg-white/95 p-3 shadow-soft">
      <label htmlFor="site-search" className="mb-2 block text-sm font-black text-cocoa">
        What do you need help with today?
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-sage" />
          <input
            id="site-search"
            name="q"
            type="search"
            className="h-12 w-full rounded-xl border border-oat bg-cream pl-12 pr-4 text-base font-semibold text-cocoa outline-none transition placeholder:text-bark/55 focus:border-sage focus:ring-4 focus:ring-sage/15"
            placeholder="Try rabies, puppy scams, grooming, insurance..."
          />
        </div>
        <button
          type="submit"
          className="h-12 rounded-xl bg-sage px-5 text-sm font-black text-cream transition hover:bg-moss"
        >
          Search
        </button>
      </div>
    </form>
  );
}
