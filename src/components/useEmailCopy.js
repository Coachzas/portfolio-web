import { useCallback, useEffect, useRef, useState } from 'react';

function useEmailCopy(email, messages) {
  const [copyStatus, setCopyStatus] = useState('');
  const timeoutRef = useRef(null);

  const copyEmail = useCallback(async () => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API is unavailable in this browser context.');
      }

      await navigator.clipboard.writeText(email);
      setCopyStatus(messages.emailCopied);
    } catch (error) {
      console.error('Unable to copy email address:', error);
      setCopyStatus(messages.emailCopyFailed);
    }

    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopyStatus(''), 2000);
  }, [email, messages.emailCopied, messages.emailCopyFailed]);

  useEffect(
    () => () => {
      window.clearTimeout(timeoutRef.current);
    },
    [],
  );

  return { copyEmail, copyStatus };
}

export default useEmailCopy;
