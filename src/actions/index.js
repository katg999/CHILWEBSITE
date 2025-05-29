"use server";

export const sendDiscordMessage = async (formData) => {
  try {
    const rawFormEntries = Object.fromEntries(formData);

    console.log("Raw Form Entries:", rawFormEntries);
  } catch (err) {
    console.error(err.message);
  }
};
