#pragma once

#include "HybridCrossPlatformMathSpec.hpp"

namespace margelo::nitro::math
{
    class HybridCrossPlatformMath : public HybridCrossPlatformMathSpec
    {
    public:
        HybridCrossPlatformMath() : HybridObject(TAG) {}

    public:
        double add(double a, double b) override;
    };
}
