import NewComment from "@/components/newComment";
export default function CommentPage({ params }) {
  console.log(params);
  return (
    <>
      <h1>
        Post ID: {params.id}, Comment ID: {params.comments}
      </h1>

      <NewComment />
      <h2>
        comment number whatever you selected for the post that you selected
        would be here...{" "}
      </h2>
    </>
  );
}
