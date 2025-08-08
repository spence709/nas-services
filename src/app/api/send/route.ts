import * as React from "react";
import { NextRequest } from "next/server";
import { Resend } from "resend";
import EmailTemplate, { EmailTemplateProps } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: EmailTemplateProps = await request.json();

    const emailTemplate = await EmailTemplate(body);

    const { data, error } = await resend.emails.send({
      from: "Project Quote Request <support@envirocloud.net>",
      to: "envirocloud.dev@gmail.com",
      subject: "Project Quote Request",
      react: emailTemplate as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
