/// <reference types="vite/client" />

// This tells TypeScript to include React types
declare module '*.tsx' {
  import type { ComponentType } from 'react';
  const component: ComponentType<{}>;
  export default component;
}
