export async function POST(request: Request) {
  let body: any = {};

  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const prompt = typeof body.prompt === "string" ? body.prompt : "";
  const responseText =
    prompt.trim().length > 0
      ? `Parachinar chatbot responding to: ${prompt}`
      : "Parachinar chatbot is ready to answer questions about the region, its rituals, and everyday life.";

  return Response.json({ response: responseText });
}

