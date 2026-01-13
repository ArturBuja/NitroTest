import { NitroModules } from 'react-native-nitro-modules';
import type { Nitro } from './Nitro.nitro';

const NitroHybridObject =
  NitroModules.createHybridObject<Nitro>('Nitro');

export function multiply(a: number, b: number): number {
  return NitroHybridObject.multiply(a, b);
}
