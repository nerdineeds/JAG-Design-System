// src/app/(components)/PrivacyNotice.tsx

import React, { FC } from 'react';

interface PrivacyNoticeProps {
  alignment: 'right' | 'center' | 'left' | 'full'; // Alignment options
  message: string; // Main message text
  policyLinkText: string; // Text for the policy link
  policyLinkHref: string; // Href for the policy link
  onAccept?: () => void; // Function to call when "Accept all" is clicked
  onReject?: () => void; // Function to call when "Reject all" is clicked
}

const PrivacyNotice: FC<PrivacyNoticeProps> = ({
  alignment,
  message,
  policyLinkText,
  policyLinkHref,
  onAccept,
  onReject,
}) => {
  const alignmentClasses = {
    right:
      'pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 ml-auto',
    center:
      'pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 mx-auto',
    left: 'pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6',
    full: 'fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8',
  };

  const containerClasses =
    alignment === 'full'
      ? alignmentClasses[alignment]
      : `${alignmentClasses[alignment]} max-w-xl rounded-xl bg-white shadow-lg ring-1 ring-gray-900/10 pointer-events-auto`;

  return (
    <div className={containerClasses}>
      <p className="max-w-4xl text-sm leading-6 text-gray-900">
        {message}{' '}
        <a
          href={policyLinkHref}
          className="font-semibold text-indigo-600"
        >
          {policyLinkText}
        </a>
        .
      </p>
      <div className="flex flex-none items-center gap-x-5 mt-4 md:mt-0">
        <button
          type="button"
          onClick={onAccept}
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={onReject}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Reject all
        </button>
      </div>
    </div>
  );
};

export default PrivacyNotice;
