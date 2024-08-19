export default function NewComment() {
  return (
    <form>
      <h1>This is my new commments form which is a component</h1>
      <label htmlFor="comment"></label>
      <textarea
        name="comment"
        id="comment"
        value=""
        placeholder="enter your new comment"
      ></textarea>
    </form>
  );
}
