# Benchmarks

### HEX

|            Library |    Ops/sec | Iterations |           Min/max |
|                  - |          - |          - |                 - |
| [HEX] colorgb      | 10,695,329 |  5,349,779 |  88.17ns/111.85ns |
| [HEX] color-string |  3,063,370 |  1,532,357 | 311.40ns/338.01ns |
| [HEX] color-parse  |  1,667,956 |    841,743 | 582.61ns/601.17ns |
| [HEX] colorrgba    |  1,407,441 |    703,721 | 666.44ns/718.47ns |
| [HEX] parse-color  |    333,576 |    166,789 |     2.96us/3.12us |
| [HEX] parse-color  |    317,786 |    158,938 |     2.92us/3.24us |
| [HEX] rgbcolor     |    267,002 |    136,883 |     3.26us/3.89us |


### Color name

|             Library |   Ops/sec | Iterations |           Min/max |
|                   - |         - |          - |                 - |
| [Name] colorgb      | 9,417,947 |  4,710,662 |  92.56ns/117.22ns |
| [Name] color-parse  | 7,358,080 |  3,679,888 | 131.17ns/136.92ns |
| [Name] color-string | 3,257,180 |  1,652,441 | 283.76ns/356.21ns |
| [Name] colorrgba    | 2,592,502 |  1,297,157 | 160.55ns/404.79ns |
| [Name] parse-color  |   745,550 |    373,162 |     1.31us/1.36us |
| [Name] parse-color  |   698,735 |    349,372 |     1.30us/1.37us |
| [Name] rgbcolor     |   236,584 |    143,415 |     2.93us/4.04us |


### RGB

|            Library |   Ops/sec | Iterations |           Min/max |
|                  - |         - |          - |                 - |
| [RGB] color-string | 2,209,625 |  1,134,373 | 397.90ns/627.92ns |
| [RGB] colorgb      | 1,357,884 |    678,951 | 682.99ns/735.06ns |
| [RGB] color-parse  |   794,452 |    397,491 |     1.23us/1.30us |
| [RGB] colorrgba    |   688,137 |    344,318 |     1.40us/1.45us |
| [RGB] parse-color  |   288,383 |    144,263 |     3.00us/4.28us |
| [RGB] parse-color  |   255,987 |    127,994 |     3.03us/5.59us |
| [RGB] rgbcolor     |   246,719 |    124,092 |     3.12us/4.39us |