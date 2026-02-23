"use server";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!name || !email || !message) return { error: "Data tidak lengkap" };

  try {
    console.log(
      `Mengirim email dari ${name} (${email}) dengan subjek "${subject}" ke info@miraisoftnet.com`,
    );

    return { success: true };
  } catch (error) {
    return { error: "Gagal mengirim pesan, " + error };
  }
}
