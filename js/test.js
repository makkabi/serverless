async function test() {
  const response = await fetch("/.netlify/functions/hello").then((response) =>
    response.json()
  );
  console.log(response);
}
test();
