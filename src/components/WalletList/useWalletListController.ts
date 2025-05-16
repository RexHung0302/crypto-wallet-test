import { useState } from "react";

const useWalletListController = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (currency: string) => {
    setImageErrors(prev => ({
      ...prev,
      [currency]: true
    }));
  };

  return {
    imageErrors,
    handleImageError,
  };
};

export default useWalletListController;