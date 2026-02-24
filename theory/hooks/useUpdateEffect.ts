export function useUpdateEffect(effect: Function, deps = []) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      return;
    }

    return effect();
  }, deps);
}
