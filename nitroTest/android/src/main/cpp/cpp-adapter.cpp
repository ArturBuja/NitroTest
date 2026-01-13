#include <jni.h>
#include "nitroOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::nitro::initialize(vm);
}
