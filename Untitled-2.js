
count of longest subarray whose sum of elements is equal to k


let arr = [1, 2, 3]  k = 3

[1] = 1, [2] = 2, [3] =3, [1,2] = 3, [1,3] = 4, [2,3] = 5, [1,2,3] = 6

longest subarray = [1, 2]

output: 1

ps = [1, 3, 6]

ps[right] - ps[left - 1] = k

ps[right] - k = ps[left - 1]



