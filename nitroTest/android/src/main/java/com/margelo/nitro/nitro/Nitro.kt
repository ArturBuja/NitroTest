package com.margelo.nitro.nitro
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class Nitro : HybridNitroSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
