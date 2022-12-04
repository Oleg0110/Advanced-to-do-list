import { useState, useEffect, useCallback } from 'react';
import {
  RESPONSIVE_SIZES,
  RESPONSIVE_VALUE,
  RESPONSIVE_WITHOUT_VALUE,
} from 'utils/constants';

function useMedia() {
  const mediaQueryLists = RESPONSIVE_SIZES.map((q) => window.matchMedia(q));

  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);

    return typeof RESPONSIVE_VALUE[index] !== 'undefined'
      ? RESPONSIVE_VALUE[index]
      : RESPONSIVE_WITHOUT_VALUE;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
}

export default useMedia;
