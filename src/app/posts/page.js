import Link from "next/link";
export default function Posts() {
  return (
    <main>
      <h1>This page is for posts</h1>
      <Link href="/posts/1">Post 1</Link>
      <Link href="/posts/2">Post 2</Link>
      <Link href="/posts/3">Post 3</Link>
    </main>
  );
}
