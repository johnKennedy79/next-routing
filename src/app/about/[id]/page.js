/* dynamic rout segment */

export default function AboutUserPage({ params }) {
  console.log(params);
  return (
    <main>
      <h1>this page is about {params.id}</h1>
      <p>
        {" "}
        This page is not actully about anyone it is an example of how parameters
        are passed through the url but if I made a folder with the user name ie.
        john inside the id folder the url would direct me there posts is a
        better example{" "}
      </p>
    </main>
  );
}
