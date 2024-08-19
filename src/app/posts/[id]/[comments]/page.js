import NewComment from "@/components/newComment";
export default function CommentPage({ params }) {
  console.log(params);
  return (
    <h1>
      Post ID: {params.id}, Comment ID: {params.comments}
      <NewComment />
    </h1>
  );
}
