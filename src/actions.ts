"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

interface FormState {
  success: boolean;
  error: string | null;
}

export const sendEmail = async (prevState: FormState, formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      to: process.env.TO_EMAIL as string,
      from: `${firstName} ${lastName} <${process.env.FROM_EMAIL}>`,
      subject: "Nova mensagem de contato",
      react: EmailTemplate({
        email,
        phone,
        service,
        message,
        lastName,
        firstName,
      }),
    });

    if (result.error?.message) {
      return {
        ...prevState,
        error: "Ocorreu um erro ao enviar o email. Tente novamente mais tarde.",
      };
    }

    return { ...prevState, success: true };
  } catch {
    return {
      ...prevState,
      error:
        "Ocorreu um erro inesperado ao enviar o email. Tente novamente mais tarde.",
    };
  }
};
