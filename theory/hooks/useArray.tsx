export function useArray<T>(initialValue: T[]) {
  const [value, setValue] = useState(initialValue);

  const push = useCallback((item: T) => {
    setValue((prev: T[]) => [...prev, item]);
  }, []);

  const removeByIndex = useCallback((index: number) => {
    setValue((prev: T[]) => {
      return prev.filter((_, i) => i !== index);
    });
  }, []);

  return { value, push, removeByIndex };
}
