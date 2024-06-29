/// <reference types="@fastly/js-compute" />
addEventListener("fetch", (event) => event.respondWith(handler(event)));

const handler = async (event) => {
  // Get the client's IP address.
  const address = event.client.address;

  // Generate a synthetic JSON response.
  const resp = new Response(
    JSON.stringify({
      clientIP: address
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  // Send the response to the client.
  return resp;
};
