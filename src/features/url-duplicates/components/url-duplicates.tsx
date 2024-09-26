import { useState } from 'react';

import { findUrlDuplicates } from '../utils/find-url-duplicates';
import { InputForm } from './input-form';
import { OutputDialog } from './output-dialog';

import type { ComponentProps } from 'react';

type InputFormProps = ComponentProps<typeof InputForm>;

export const UrlDuplicates = () => {
  const [outputData, setOutputData] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleInputSubmit: InputFormProps['onSubmit'] = (formData) => {
    const duplicatesData = findUrlDuplicates(formData);

    setOutputData(JSON.stringify(duplicatesData, null, 2));
    setShowModal(true);
  };

  const handleCloseOutputDialogClick = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center">
      <InputForm onSubmit={handleInputSubmit} />

      <OutputDialog
        open={showModal}
        onClose={handleCloseOutputDialogClick}
        data={outputData}
      />
    </div>
  );
};
