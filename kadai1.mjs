// お題１
// ある駄菓子屋で飲み物を買うと、空き瓶3本で新しい飲み物を1本プレゼントしてくれる。
// 最初に購入した飲み物の本数から、トータルで飲める本数を算出するプログラムを作成せよ。
// また、最初に100本購入した場合、トータルで何本飲めるか。

// 例：
// 購入した本数　0　→　飲める本数　0
// 購入した本数　1　→　飲める本数　1
// 購入した本数　3　→　飲める本数　4
// 購入した本数　11　→　飲める本数　16


export default function bottleCount(num) {
    let division = Math.floor(num / 3)
    let remainder = num % 3
    let totalDivision = division
    let totalDivisionRemainder = division + remainder

    while (totalDivisionRemainder >= 3) {
        division = Math.floor(totalDivisionRemainder / 3)
        remainder = totalDivisionRemainder % 3
        totalDivisionRemainder = division + remainder
        totalDivision += division
    }
    return num + totalDivision
}

// console.log(bottleCount(100))
