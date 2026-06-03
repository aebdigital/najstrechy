export {};

declare global {
  interface Window {
    // Provided by the Plausible analytics stub (see app/layout.tsx).
    plausible?: (...args: unknown[]) => void;
  }
}
