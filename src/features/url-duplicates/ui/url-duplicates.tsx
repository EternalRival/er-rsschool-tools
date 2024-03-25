import { createPortal } from 'react-dom';

import { useUrlDuplicates } from '../lib/use-url-duplicates';
import { InputForm } from './input-form';
import { OutputForm } from './output-form';

import type { ReactNode } from 'react';

export function UrlDuplicates(): ReactNode {
  const { urlDuplicatesObject, setFormData, showModal, setShowModal } = useUrlDuplicates();

  return (
    <div className="flex items-center">
      <InputForm
        handleSubmit={(formData) => {
          setFormData(formData);
          setShowModal(true);
        }}
      />
      {showModal &&
        createPortal(
          <OutputForm
            outputData={urlDuplicatesObject}
            onClose={() => void setShowModal(false)}
          />,
          document.body
        )}
    </div>
  );
}
