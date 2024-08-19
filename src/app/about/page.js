import Link from "next/link";
export default function About() {
  return (
    <main>
      <h1> This is about routing in the about folder </h1>
      <h2>These links are links to a page in the ID folder </h2>
      <Link href="/about/john"> About John</Link>
      <Link href="/about/tim">About Tim</Link>
      <Link href="/about/jez">About Jez</Link>
    </main>
  );
}
