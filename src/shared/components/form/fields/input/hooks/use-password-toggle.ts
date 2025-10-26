import { useState } from "react";

export const usePasswordToggle = (initialVisible = false): { passwordVisible: boolean; togglePasswordVisibility: () => void } => {
  const [passwordVisible, setPasswordVisible] = useState(initialVisible);

  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return {
    passwordVisible,
    togglePasswordVisibility,
  };
};
