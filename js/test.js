async function test() {
  const response = await fetch("/.netlify/functions/hello.js").then(
    (response) => response.json()
  );
  console.log(response);
}
test();
