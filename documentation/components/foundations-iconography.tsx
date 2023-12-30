// Import core
import * as Icons from 'lucide-react';
// Import customs
import { useState } from 'react';

export const IconGallery = () => {
  const iconComponents = Object.entries(Icons).filter(
    ([iconName, value]) =>
      (typeof value === 'function' &&
        value.$$typeof === Symbol.for('react.element')) ||
      (value.$$typeof === Symbol.for('react.forward_ref') &&
        !iconName.endsWith('Icon'))
  );
  const formatIconName = (iconName) => {
    return iconName.replace(/([A-Z])/g, ' $1').trim();
  };
  const [copiedIcon, setCopiedIcon] = useState('');
  const copyToClipboard = (iconName) => {
    const jsxString = `<${iconName} />`;
    navigator.clipboard
      .writeText(jsxString)
      .then(() => {
        setCopiedIcon(jsxString);
        setTimeout(() => {
          setCopiedIcon('');
        }, 2000);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-6">
        {iconComponents.map(([iconName, IconComponent]) => (
          <div
            key={iconName}
            className="cursor-pointer nextra-card nx-group grid p-6 justify-center items-center nx-rounded-lg nx-border nx-border-gray-200 nx-text-current nx-no-underline dark:nx-shadow-none hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100 active:nx-shadow-sm active:nx-shadow-gray-200 nx-transition-all nx-duration-200 hover:nx-border-gray-300 nx-bg-transparent nx-shadow-sm dark:nx-border-neutral-800 hover:nx-bg-slate-50 hover:nx-shadow-md dark:hover:nx-border-neutral-700 dark:hover:nx-bg-neutral-900"
            onClick={() => copyToClipboard(iconName)}
          >
            <div className="flex items-center justify-center">
              <IconComponent className="stroke-icon-brand" size={32} />
            </div>
            <span className="w-full text-sm text-center pt-3 px-2 break-words">
              {formatIconName(iconName)}
            </span>
          </div>
        ))}
      </div>
      {copiedIcon && (
        <div className="fixed px-3 py-2 bottom-6 right-6 nx-text-current nx-rounded-md bg-neutral-0 nx-shadow-lg nx-border nx-border-gray-200 dark:nx-border-neutral-700 dark:nx-bg-neutral-900 z-[1000]">
          {copiedIcon} copied to clipboard! 🎉
        </div>
      )}
    </>
  );
};
