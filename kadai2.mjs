import bottleCount from './kadai1.mjs'

// お題2
// あるお店では瓶に入ったジュースを1本１００円で売っています。
// このお店では、空き瓶3本とジュース一本を交換してもらえます。
// 本数を入力すれば、最も安く買える金額を応えてくれるプログラムを作る。

function lowestPrice(num) {
  const BottleCount = bottleCount(num)
  const totalPrice = num * 100 * 1.1

  return Math.floor(totalPrice / BottleCount)
}

// console.log(`${lowestPrice(11)}円`)
