export const sendDiscordMessage = async (formData) => {
  try {
    const rawFormEntries = Object.fromEntries(formData.entries());
    //console.log("Raw Form Entries:", rawFormEntries);

    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: rawFormEntries.username || "New Contact",
        content: rawFormEntries.message || "No message provided.",
        avatar_url:
          rawFormEntries.avatar_url || "https://example.com/default-avatar.png",
        embeds: [
          {
            title: "New Contact Submission",
            color: 0x3498db,
            fields: [
              {
                name: "First Name",
                value: rawFormEntries.first_name || "N/A",
                inline: true,
              },
              {
                name: "Last Name",
                value: rawFormEntries.last_name || "N/A",
                inline: true,
              },
              {
                name: "Email",
                value: rawFormEntries.email || "N/A",
                inline: true,
              },
              {
                name: "Phone",
                value: rawFormEntries.phone || "N/A",
                inline: true,
              },
              {
                name: "Message",
                value: rawFormEntries.message || "N/A",
                inline: false,
              },
            ],
          },
        ],
      }),
    });
  } catch (err) {
    console.error("Failed to send Discord message:", err);
  }
};
