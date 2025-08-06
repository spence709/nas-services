import React from "react";

export interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  projectDetails: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  lastName,
  email,
  company,
  projectType,
  projectDetails,
}) => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "linear-gradient(to right, #4f46e5, #7c3aed)",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            margin: "0",
          }}
        >
          📩 Project Quote Request
        </h1>
        <p
          style={{
            fontSize: "12px",
            marginTop: "5px",
          }}
        >
          New project submission from your site
        </p>
      </div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  color: "#6b7280",
                  fontWeight: "bold",
                  padding: "10px",
                  width: "30%",
                }}
              >
                First Name
              </th>
              <td
                style={{
                  color: "#1f2937",
                  padding: "10px",
                }}
              >
                {firstName}
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  color: "#6b7280",
                  fontWeight: "bold",
                  padding: "10px",
                }}
              >
                Last Name
              </th>
              <td
                style={{
                  color: "#1f2937",
                  padding: "10px",
                }}
              >
                {lastName}
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  color: "#6b7280",
                  fontWeight: "bold",
                  padding: "10px",
                }}
              >
                Business Email
              </th>
              <td
                style={{
                  color: "#1f2937",
                  padding: "10px",
                }}
              >
                {email}
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  color: "#6b7280",
                  fontWeight: "bold",
                  padding: "10px",
                }}
              >
                Company
              </th>
              <td
                style={{
                  color: "#1f2937",
                  padding: "10px",
                }}
              >
                {company}
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  color: "#6b7280",
                  fontWeight: "bold",
                  padding: "10px",
                }}
              >
                Project Type
              </th>
              <td
                style={{
                  color: "#1f2937",
                  padding: "10px",
                }}
              >
                {projectType}
              </td>
            </tr>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  color: "#6b7280",
                  fontWeight: "bold",
                  padding: "10px",
                  verticalAlign: "top",
                }}
              >
                Project Details
              </th>
              <td
                style={{
                  color: "#1f2937",
                  padding: "10px",
                  whiteSpace: "pre-line",
                }}
              >
                {projectDetails}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style={{
          backgroundColor: "#f9fafb",
          textAlign: "center",
          fontSize: "12px",
          color: "#6b7280",
          padding: "15px",
        }}
      >
        You received this email via your website contact form.
      </div>
    </div>
  );
};

export default EmailTemplate;
