import type { HybridObject } from 'react-native-nitro-modules'

export interface Math extends HybridObject<{
  android: 'kotlin'
  ios: 'swift'
}> {
  add(a: number, b: number): number
}

export interface CrossPlatformMath extends HybridObject<{
  android: 'c++'
  ios: 'c++'
}> {
  add(a: number, b: number): number
}
