/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

const usePageLeaveWarning = (shouldWarn: any) => {
  useEffect(() => {
    const handleBeforeUnload = (e: { preventDefault: () => void; returnValue: string; }) => {
      if (shouldWarn) {
        e.preventDefault();
        e.returnValue = ''; // Chrome requires returnValue to be set
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [shouldWarn]);
};

export default usePageLeaveWarning;