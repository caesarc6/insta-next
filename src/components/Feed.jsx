import React from "react";
import Posts from "@/components/Posts";
import MiniProfile from "@/components/MiniProfile";

export default function Feed() {
  return (
    <main>
      {/* posts (left) */}
      <section>
        <Posts />
      </section>
      {/* mini profile (right) */}
      <section>
        <MiniProfile />
      </section>
    </main>
  );
}
