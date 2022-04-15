import bottleCount from './kadai1.mjs'
import lowestPrice from "./kadai2.mjs"

// 課題３
// あるお店では瓶に入ったジュースを1本１００円で売っています。このお店では、空き瓶3本とジュース一本を交換してもらえます。
// さて、このお店の売り上げ管理のシステムを作ることになった。店には抱えている在庫がある。在庫の数以上に売ることはできない。購入時に、空き瓶の数を想定して、購入した時点でおまけを渡している。3本買ったら4本、7本買ったら10本というように。
// 在庫よりも多い数を買おうとしたら、あるだけの数を売る。その場合、おまけは出せない。
// さて、在庫が100で始める場合、以下の順に購入したら、残り在庫と売り上げは、どのように変化するだろうか？
// ・１本購入
// ・３本購入
// ・20本購入
// ・100本購入

let stock = 100
let sales = 0

function calculateSalesAndStock(purchasedBottle) {
    let acquiredBottle = bottleCount(purchasedBottle)
    if (acquiredBottle > stock) {
        const price = (stock % 3 === 0) ? lowestPrice(stock - 1) : lowestPrice(stock)
        sales += price
        stock -= bottleCount(price / 100)
        console.log(`在庫：${stock}本, 売上：${sales}円`)
    } else {
        stock -= acquiredBottle
        sales += purchasedBottle * 100
        console.log(`在庫：${stock}本, 売上：${sales}円`)
    }
}

calculateSalesAndStock(3) //在庫：96本, 売上：300円
calculateSalesAndStock(6) //在庫：88本, 売上：900円
calculateSalesAndStock(9) //在庫：75本, 売上：1800円
calculateSalesAndStock(100) //在庫：1本, 売上：6800円
