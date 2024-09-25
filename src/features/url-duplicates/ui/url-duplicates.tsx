import { createPortal } from 'react-dom';

import { useUrlDuplicates } from '../lib/use-url-duplicates';
import { InputForm } from './input-form';
import { OutputForm } from './output-form';

export const UrlDuplicates = () => {
  const { urlDuplicatesObject, setFormData, showModal, setShowModal } = useUrlDuplicates();

  return (
    <div className="flex items-center">
      <InputForm
        onSubmit={(formData) => {
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
};
