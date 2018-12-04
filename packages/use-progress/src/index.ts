import { useState } from 'react';

export default function useProgress(current: number, total: number) {
  const progress = !(current && total) ? 0 : (current * 100) / total;

  return useState<number>(progress);
}
