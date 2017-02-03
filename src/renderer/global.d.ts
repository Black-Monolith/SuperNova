/**
 * Enable import syntax from TypeScript
 * using Webpack modules
 */

declare module '*.svg' {
  const content: string
  export default content
}
