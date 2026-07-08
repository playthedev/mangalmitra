"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * Returns false during SSR and the initial hydration render, true after.
 * Use to safely render client-only state (e.g. the persisted cart).
 */
export function useHydrated() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
