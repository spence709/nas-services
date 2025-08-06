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
    <div className="max-w-[600px] mx-auto bg-white shadow-xl rounded-xl overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">📩 Project Quote Request</h1>
        <p className="text-sm mt-1">New project submission from your site</p>
      </div>
      {/* Body */}
      <div className="p-6">
        <table className="w-full table-auto">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <th className="text-left text-gray-500 font-semibold py-3 w-1/3">
                First Name
              </th>
              <td className="text-gray-800 py-3">{firstName}</td>
            </tr>
            <tr>
              <th className="text-left text-gray-500 font-semibold py-3">
                Last Name
              </th>
              <td className="text-gray-800 py-3">{lastName}</td>
            </tr>
            <tr>
              <th className="text-left text-gray-500 font-semibold py-3">
                Business Email
              </th>
              <td className="text-gray-800 py-3">{email}</td>
            </tr>
            <tr>
              <th className="text-left text-gray-500 font-semibold py-3">
                Company
              </th>
              <td className="text-gray-800 py-3">{company}</td>
            </tr>
            <tr>
              <th className="text-left text-gray-500 font-semibold py-3">
                Project Type
              </th>
              <td className="text-gray-800 py-3">{projectType}</td>
            </tr>
            <tr>
              <th className="text-left text-gray-500 font-semibold py-3 align-top">
                Project Details
              </th>
              <td className="text-gray-800 py-3 whitespace-pre-line">
                {projectDetails}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Footer (Optional) */}
      <div className="bg-gray-50 text-center text-sm text-gray-500 py-4">
        You received this email via your website contact form.
      </div>
    </div>
  );
};

export default EmailTemplate;
