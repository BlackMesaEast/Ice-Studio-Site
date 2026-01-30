export async function POST(request: Request) {
  const formData = await request.formData();
  const firstName = formData.get("firstName")?.toString() || "";
  const lastName = formData.get("lastName")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const message = formData.get("message")?.toString() || "";
  const file = formData.get("file") as File | null;
  const fileText = file && file.size > 0 ? file.name : "None";
  const Message =
    `-----------------------------------\n` +
    `**Name:** ${firstName} ${lastName}\n` +
    `**Email:** ${email}\n` +
    `**Message:** ${message}\n` +
    `**File:** ${fileText}`;

  const discordForm = new FormData();
  discordForm.append("content", Message);

  if (file && file.size > 8 * 1024 * 1024) {
    return new Response(
      JSON.stringify({ success: false, error: "File too big." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (file && file.size > 0) {
    discordForm.append("file", file, file.name);
  }

  const res = await fetch(process.env.DISCORD_CONTACT_TOKEN as string, {
    method: "POST",
    body: discordForm,
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
