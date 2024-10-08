import Posts from "@/components/Posts";
import MiniProfile from "@/components/MiniProfile";

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      {/* posts (left) */}
      <section className="md:col-span-2">
        <Posts />
      </section>
      {/* mini profile (right) */}
      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          <MiniProfile />
        </div>
      </section>
    </main>
  );
}
