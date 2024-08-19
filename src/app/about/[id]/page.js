/* dynamic rout segment */

export default function AboutUserPage({ params }) {
  console.log(params);
  return (
    <main>
      <h1>this page is about {params.id}</h1>
    </main>
  );
}
