export function generateArrayNumber(...args: Array<number>) {
  let min, max;
  const accumulator = [];
  if (args.length > 1) {
    min = args.reduce((item, nextItem) => Math.min(item, nextItem))
    max = args.reduce((item, nextItem) => Math.max(item, nextItem))
  } else {
    min = 0
    max = args[0]
  }
  for (let i = min; i <= max; i++) { accumulator.push(`${i}`) }
  return accumulator
}
