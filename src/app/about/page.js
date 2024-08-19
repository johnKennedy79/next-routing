import Link from "next/link";
export default function About() {
  return (
    <main>
      <Link href="/about/john"> about John</Link>
      <Link href="/about/tim">about Tim</Link>
      <Link href="/about/jez">about Jez</Link>
      <p> about routing</p>
    </main>
  );
}
