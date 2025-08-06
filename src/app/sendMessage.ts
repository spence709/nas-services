import { Resend } from "resend";
import EmailTemplate, { EmailTemplateProps } from "./components/email-template";

const resend = new Resend("re_2edNCQLR_Mb6k4GZ8oHbG8zStpCksAVuK");

const sendMessage = async ({
  firstName,
  lastName,
  email,
  company,
  projectDetails,
  projectType,
}: EmailTemplateProps) => {
  const emailTemplate = await EmailTemplate({
    firstName,
    lastName,
    email,
    company,
    projectDetails,
    projectType,
  });
  await resend.emails.send({
    from: email,
    to: "contact@envirocloud.net",
    subject: "Project Quote Request",
    react: emailTemplate,
  });
};

export default sendMessage;
