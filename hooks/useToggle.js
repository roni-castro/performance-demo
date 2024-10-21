import { useState } from 'react';

/**
 * Custom hook to manage a boolean toggle state.
 *
 * @param {boolean} [initialValue=false] - The initial state value.
 * @returns {[boolean, function]} - An array containing the current state and a function to toggle it.
 */
const useToggle = (initialValue = false) => {
  const [isToggled, setIsToggled] = useState(initialValue);
  const toggle = () => {setIsToggled(!isToggled)};

  return [isToggled, toggle];
}

export default useToggle