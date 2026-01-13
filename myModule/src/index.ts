// TODO: Export all HybridObjects here for the user
import { NitroModules } from 'react-native-nitro-modules'
import { type Math } from './specs/Example.nitro'
const NitroHybridObject = NitroModules.createHybridObject<Math>('Math')

export function add(a: number, b: number): number {
  return NitroHybridObject.add(a, b)
}
