import { Base } from './base';
import { Or, OrInput } from './or';

export const wrap = (input: string | Base) =>
  typeof input !== 'string' || input.length === 1
    ? input.toString()
    : `(?:${input})`;

export const concat = (...inputs: Array<string | Base>) => inputs.join('');

export const optional = (input: string | Base) => `${wrap(input)}?`;

export const repeat = (input: string | Base, count: number, max?: number) =>
  max === undefined
    ? `${wrap(input)}{${count}}`
    : max === Infinity
      ? count > 1
        ? `${wrap(input)}{${count},}`
        : count < 1 ? `${wrap(input)}*` : `${wrap(input)}+`
      : `${wrap(input)}{${count},${max}}`;