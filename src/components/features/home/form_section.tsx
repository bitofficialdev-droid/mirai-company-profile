"use client";

import { sendEmail } from "@/actions/contact";
import { CSButton } from "@/components/shared/cs_button";
import { useState } from "react";

export default function FormSection() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await sendEmail(formData);
    setIsPending(false);

    if (result.success) {
      setStatus("success");
      (document.getElementById("contact-form") as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form
      id="contact-form"
      action={handleSubmit}
      className="flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="w-full rounded-lg border border-[#0451bf]/20 bg-white/60 p-4 text-sm text-gray-800 placeholder-gray-400 transition focus:border-[#0451bf] focus:bg-white focus:ring-1 focus:ring-[#0451bf] focus:outline-none"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full rounded-lg border border-[#0451bf]/20 bg-white/60 p-4 text-sm text-gray-800 placeholder-gray-400 transition focus:border-[#0451bf] focus:bg-white focus:ring-1 focus:ring-[#0451bf] focus:outline-none"
        />
      </div>

      <input
        name="subject"
        type="text"
        placeholder="Subject"
        className="w-full rounded-lg border border-[#0451bf]/20 bg-white/60 p-4 text-sm text-gray-800 placeholder-gray-400 transition focus:border-[#0451bf] focus:bg-white focus:ring-1 focus:ring-[#0451bf] focus:outline-none"
      />

      <textarea
        name="message"
        rows={5}
        required
        placeholder="Message"
        className="w-full resize-none rounded-lg border border-[#0451bf]/20 bg-white/60 p-4 text-sm text-gray-800 placeholder-gray-400 transition focus:border-[#0451bf] focus:bg-white focus:ring-1 focus:ring-[#0451bf] focus:outline-none"
      ></textarea>

      <div className="mt-2 text-center lg:text-left">
        <CSButton
          type="submit"
          variant="solid"
          color="primary"
          isLoading={isPending}
        >
          {isPending ? "Sending..." : "Send Message"}
        </CSButton>

        {status === "success" && (
          <p className="mt-4 text-sm font-normal text-green-600">
            Pesan berhasil dikirim ke Mirai Softnet!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm font-normal text-red-600">
            Maaf, terjadi kesalahan. Coba lagi nanti.
          </p>
        )}
      </div>
    </form>
  );
}
