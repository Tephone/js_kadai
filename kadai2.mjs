// import bottleCount from './kadai1.mjs'

// お題2
// あるお店では瓶に入ったジュースを1本１００円で売っています。
// このお店では、空き瓶3本とジュース一本を交換してもらえます。
// 本数を入力すれば、最も安く買える金額を応えてくれるプログラムを作る。
// 例) 20本買う場合は1400円

function lowestPrice(num) {
  if (num <= 3) {
    return num * 100
  } else if (num % 3 === 0 ) {
    return (num - Math.floor(num / 3) + 1) * 100
  } else {
    return (num - Math.floor(num / 3)) * 100
  }
}

console.log(`${lowestPrice(0)}円`)
console.log(`${lowestPrice(1)}円`)
console.log(`${lowestPrice(9)}円`)
console.log(`${lowestPrice(20)}円`)
console.log(`${lowestPrice(149)}円`)
