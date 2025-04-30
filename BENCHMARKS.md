# Benchmarks

### HEX

|            Library |   Ops/sec | Iterations |           Min/max |
|                  - |         - |          - |                 - |
| [HEX] colorgb      | 2,617,853 |  1,314,756 | 119.06ns/799.66ns |
| [HEX] color-string | 1,521,268 |    764,565 | 427.78ns/810.94ns |
| [HEX] color-parse  | 1,145,824 |    572,912 |   220.83ns/1.27us |
| [HEX] colorrgba    |   723,718 |    362,026 |     1.01us/2.76us |
| [HEX] parse-color  |   208,999 |    107,220 |     3.41us/7.61us |
| [HEX] parse-color  |   202,425 |    101,520 |     2.97us/9.03us |
| [HEX] rgbcolor     |   128,138 |     64,069 |    1.22us/11.20us |


### Color name

|             Library |   Ops/sec | Iterations |           Min/max |
|                   - |         - |          - |                 - |
| [Name] colorgb      | 7,237,536 |  3,637,905 |  96.33ns/257.42ns |
| [Name] color-parse  | 3,798,167 |  1,900,974 | 218.03ns/280.49ns |
| [Name] colorrgba    | 2,630,184 |  1,324,563 | 303.76ns/414.98ns |
| [Name] color-string | 1,670,276 |    839,276 | 493.32ns/796.74ns |
| [Name] parse-color  |   421,599 |    214,020 |     1.34us/3.55us |
| [Name] parse-color  |   378,142 |    190,343 |     1.70us/3.88us |
| [Name] rgbcolor     |   150,257 |     75,853 |     2.56us/8.78us |


### RGB

|            Library |   Ops/sec | Iterations |           Min/max |
|                  - |         - |          - |                 - |
| [RGB] color-string | 1,827,223 |    916,986 | 444.32ns/710.78ns |
| [RGB] colorgb      | 1,051,713 |    529,708 |   737.24ns/1.16us |
| [RGB] color-parse  |   540,065 |    270,600 |     1.40us/2.87us |
| [RGB] colorrgba    |   378,302 |    189,522 |     1.58us/3.37us |
| [RGB] parse-color  |   212,723 |    106,529 |     3.34us/7.80us |
| [RGB] parse-color  |   190,745 |     96,493 |     3.30us/8.34us |
| [RGB] rgbcolor     |   134,906 |     68,200 |     5.35us/9.59us |