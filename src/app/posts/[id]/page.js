import Link from "next/link";
export default function DynamicPosts({ params }) {
  console.log(params);
  return (
    <main>
      <h1>Page about post {params.id} </h1>
      <Link href="/posts/[params.id]/10" as={`/posts/${params.id}/10`}>
        Comment 10
      </Link>
      <Link href="/posts/[params.id]/20" as={`/posts/${params.id}/20`}>
        Comment 20
      </Link>
      <Link href="/posts/[params.id]/30" as={`/posts/${params.id}/30`}>
        Comment 30
      </Link>
      <h1>Post identified as post/ and the link selected are here...</h1>
    </main>
  );
}
