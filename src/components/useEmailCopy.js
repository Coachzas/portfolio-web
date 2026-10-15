import { useCallback, useEffect, useRef, useState } from 'react';

function useEmailCopy(email) {
  const [copyStatus, setCopyStatus] = useState('');
  const timeoutRef = useRef(null);

  const copyEmail = useCallback(async () => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API is unavailable in this browser context.');
      }

      await navigator.clipboard.writeText(email);
      setCopyStatus('คัดลอกอีเมลแล้ว!');
    } catch (error) {
      console.error('Unable to copy email address:', error);
      setCopyStatus('คัดลอกอีเมลไม่สำเร็จ');
    }

    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopyStatus(''), 2000);
  }, [email]);

  useEffect(
    () => () => {
      window.clearTimeout(timeoutRef.current);
    },
    [],
  );

  return { copyEmail, copyStatus };
}

export default useEmailCopy;
