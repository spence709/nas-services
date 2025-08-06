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
    <div className="max-w-[600px] mx-auto bg-gray-100 rounded-lg shadow-md p-6 font-sans">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Project Quote Request
        </h1>
      </div>
      <table className="w-full bg-white rounded-lg shadow-md">
        <tbody>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 bg-gray-100 text-left text-gray-600 font-medium">
              First Name
            </th>
            <td className="px-4 py-3 text-gray-800">{firstName}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 bg-gray-100 text-left text-gray-600 font-medium">
              Last Name
            </th>
            <td className="px-4 py-3 text-gray-800">{lastName}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 bg-gray-100 text-left text-gray-600 font-medium">
              Business Email
            </th>
            <td className="px-4 py-3 text-gray-800">{email}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 bg-gray-100 text-left text-gray-600 font-medium">
              Company
            </th>
            <td className="px-4 py-3 text-gray-800">{company}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 bg-gray-100 text-left text-gray-600 font-medium">
              Project Type
            </th>
            <td className="px-4 py-3 text-gray-800">{projectType}</td>
          </tr>
          <tr>
            <th className="px-4 py-3 bg-gray-100 text-left text-gray-600 font-medium">
              Project Details
            </th>
            <td className="px-4 py-3 text-gray-800">{projectDetails}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmailTemplate;
