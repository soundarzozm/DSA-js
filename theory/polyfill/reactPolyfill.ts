let _state;
let _ref;

const MyReact = (function () {
  let hooks = [];
  let currentHook = 0;

  return {
    render(Component) {
      const Comp = Component();
      Comp.render();
      currentHook = 0; // Reset for next render
      return Comp;
    },
    useState(initialValue) {
      const idx = currentHook++;
      const state = hooks[idx] !== undefined ? hooks[idx] : initialValue;
      const setState = (newValue) => {
        hooks[idx] = newValue;
      };
      return [state, setState];
    },
    // Internal helper to get current index
    _getIdx: () => currentHook++,
    // Internal helper to access storage
    _getHooks: () => hooks,
  };
})();

function useState(initialValue?: any) {
  _state = _state === undefined ? initialValue : _state;
  const setState = (newValue: any) => {
    _state = newValue;
  };

  return [_state, setState];
}

function useRef(initialValue?: any) {
  if (_ref === undefined) {
    _ref = { current: initialValue };
  }

  return _ref;
}

function useEffect(callback, dependencyArray) {
  // 1. Access Storage
  const hooks = MyReact._getHooks();
  const index = MyReact._getIdx();

  // 2. Get Previous Record
  // Structure: { deps: [...], cleanup: Function | undefined }
  const oldHook = hooks[index];

  // 3. Check for Changes
  // (Re-using the helper logic from before)
  let hasChanged = true;
  if (oldHook) {
    hasChanged = dependencyArray.some(
      (dep, i) => !Object.is(dep, oldHook.deps[i]),
    );
  }

  // 4. Execution Logic
  if (hasChanged) {
    // STEP A: Clean up the OLD effect first!
    // If the previous effect returned a cleanup function, run it now.
    if (oldHook && typeof oldHook.cleanup === "function") {
      oldHook.cleanup();
    }

    // STEP B: Run the NEW effect
    // We capture the return value, which might be a new cleanup function.
    const cleanupFn = callback();

    // STEP C: Store everything for the next render
    hooks[index] = {
      deps: dependencyArray,
      cleanup: cleanupFn,
    };
  }
}

function useCallback(fn, deps) {
  // We pass a "factory" () => fn
  // useMemo runs the factory, which returns 'fn'
  return useMemo(() => fn, deps);
}

function useMemo(factory, dependencyArray) {
  // 1. Access the underlying storage (simulated React internals)
  const hooks = MyReact._getHooks();
  const index = MyReact._getIdx();

  // 2. Retrieve the previous render's data
  // Structure: { value: ..., deps: [...] }
  const oldHook = hooks[index];

  // 3. Check if we need to re-calculate
  if (dependenciesChanged(oldHook?.deps, dependencyArray)) {
    // CASE A: Dependencies changed (or first render)
    // Run the factory function to get the new value
    const newValue = factory();

    // Store the new value AND the new dependencies
    hooks[index] = {
      value: newValue,
      deps: dependencyArray,
    };

    return newValue;
  } else {
    // CASE B: Dependencies match
    // Return the CACHED value from the previous render
    return oldHook.value;
  }
}

function dependenciesChanged(oldDeps, newDeps) {
  // If no old deps (first render), they "changed"
  if (!oldDeps) return true;

  // If lengths differ, they changed
  if (oldDeps.length !== newDeps.length) return true;

  // Compare every item. If ANY item is different, return true.
  // Object.is covers edge cases like NaN and +0/-0
  return newDeps.some((dep, i) => !Object.is(dep, oldDeps[i]));
}
