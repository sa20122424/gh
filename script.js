alert("сейчас запустится рандомайзер чисел") 
const userNumber = (` ${Math.round(Math.random() * 100 )}`)
alert(`Рандои показал число ${userNumber} `)
 alert(`мы число${userNumber} разделим и умножим на 2`)
 
 const user = (userNumber * 2 )
 const user1 =(userNumber / 2)
 const user2 =(userNumber / 3)
 const user3 =(Math.round(user2))
const userDFm = (`рандом показал число${userNumber} 
мы число${userNumber} умножим на 2 получится: ${user}
и мы число${userNumber} разделим на 2 получится ${user1}
и мы число${userNumber} разделим на 3 и округлим ${user3}

`)
alert(userDFm)

