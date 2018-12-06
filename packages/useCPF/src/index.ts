import formatCPF from '@brazilian-utils/format-cpf';
import isValid from '@brazilian-utils/is-valid-cpf';

import { useState } from 'react';

export default function useCPF(cpf: string) {
  const [formattedCPF, setFormattedCPF] = useState<string>(formatCPF(cpf));

  const updateCPF = (cpf: string) => {
    setFormattedCPF(formatCPF(cpf));
  };

  return [
    formattedCPF,
    {
      setCPF: updateCPF,
      isValid: () => isValid(formatCPF)
    }
  ];
}
