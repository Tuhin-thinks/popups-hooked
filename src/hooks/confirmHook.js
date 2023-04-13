import { useContext, useEffect, useState } from "react";
import { ConfirmContext } from "../context/ConfirmContext";

/**
 * Hook to get user confirmation, can be used in place of window.confirm
 */
const useConfirm = () => {
  const [confirm, setConfirm] = useContext(ConfirmContext);
  const [needsCleanup, setNeedsCleanup] = useState(false);

  const isConfirmed = (prompt, { oKLabel = "Ok", cancelLabel = "Cancel" }) => {
    setNeedsCleanup(true);

    const promise = new Promise((resolve, reject) => {
      setConfirm({
        prompt,
        isOpen: true,
        proceed: resolve,
        cancel: reject,
        oKLabel,
        cancelLabel,
      });
    });
    return promise.then(
      () => {
        setConfirm({ ...confirm, isOpen: false });
        return true;
      },
      () => {
        setConfirm({ ...confirm, isOpen: false });
        return false;
      }
    );
  };

  useEffect(() => {
    return () => {
      if (confirm.cancel && needsCleanup) {
        confirm.cancel();
      }
    };
  }, [confirm, needsCleanup]);

  return {
    ...confirm,
    isConfirmed,
  };
};

export default useConfirm;
