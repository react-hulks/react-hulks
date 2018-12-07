import formatCPF from '@brazilian-utils/format-cpf';
import isCPFValid from '@brazilian-utils/is-valid-cpf';

import { useState } from 'react';

export interface API {
  setCPF: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean;
}

export default function useCPF(input: string): [string, API] {
  const [CPF, setCPF] = useState<string>(input);

  return [
    formatCPF(CPF),
    {
      setCPF,
      isValid: isCPFValid(CPF)
    }
  ];
}
