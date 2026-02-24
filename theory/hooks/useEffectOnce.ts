export function useEffectOnce(effect: Function) {
  useEffect(() => {
    return () => {
      effect();
    };
  }, []);
}
