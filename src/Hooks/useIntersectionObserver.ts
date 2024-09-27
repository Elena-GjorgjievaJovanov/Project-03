import { useEffect, useRef, useState, MutableRefObject } from "react";

type UseIntersectionObserverOptions = IntersectionObserverInit;

export const useIntersectionObserver = <T extends HTMLElement>(
  options: UseIntersectionObserverOptions
): [MutableRefObject<T | null>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};
