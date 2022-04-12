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
    const originalPurchasedBottle = num
    let presentedBottle = 0
    let totalPresentedBottle = 0

    while (num >= 3) {
        presentedBottle = Math.floor(num / 3)
        num = presentedBottle + num % 3
        totalPresentedBottle += presentedBottle
    }
    return originalPurchasedBottle + totalPresentedBottle
}

console.log(bottleCount(1))
console.log(bottleCount(2))
console.log(bottleCount(3))
console.log(bottleCount(4))
console.log(bottleCount(14))
console.log(bottleCount(100))

