type Mods = Record<string, string | boolean>

export function classNames(className: string, mods: Mods, additional: string[]): string {
  return [
    className,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional,
  ].join(' ')
}