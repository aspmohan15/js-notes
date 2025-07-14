[0, 1, 2, 3, 4] - ind
[1, 2, 3, 4, 5]

ps: [1, 3, 6, 10, 15]

[1,4] = ps[4] - ps[left - 1]
          15  -  1 = 14

ps[4] = 1 + 2 + 3 + 4 + 5

ps[3] = 1 + 2 + 3 + 4

ps[2] = 1 + 2 + 3

ps[1] = 1 + 2 


1, 4 - left, right inclusive -> 1 - 4 => ps[right] - ps[left -1]

1, 4 - left inc, right exc -> 1 - 3  => ps[right - 1] - ps[left - 1]

1, 4 - right inc, left exc -> 2 - 4 => ps[right] - ps[left]

1, 4 - left exc, right exc -> 2 - 3 => ps[right - 1] - ps[left]



Prefix Sum

inp: [-2, 0, 3, -5, 2, -1]

prefix array: [-2, -2, 1, -4, -2, -3]

[0, 2] => prefix[2]

[2, 5] => prefix[5] - prefix[2-1] => -3 - (-2) => -1

