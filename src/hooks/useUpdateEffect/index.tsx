import { useEffect, useRef } from 'react';

const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isMounted = useRef(false);
  console.log(isMounted);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
    return undefined;
  }, deps);
};

export default useUpdateEffect;
