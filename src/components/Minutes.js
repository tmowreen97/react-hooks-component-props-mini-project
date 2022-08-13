import react from "react";
import blogData from "../data/blog";

function ShortRead({date, minutes}){
  let shortArray=[]
  const short = Math.ceil(minutes/5)
  for (let i=1; i<short+1; i++){
    shortArray.push('☕️')
  }
  console.log(shortArray.join(''))
  return (
    <small>{date}-{shortArray.join('')}</small>
  )
}

function LongRead({minutes, date}){
  let longArray=[]
  const long = Math.ceil(minutes/10)
  for (let i=1; i<long+1; i++){
    longArray.push('🍱')
  }
  console.log(longArray.join(''))
  return (
    <small>{date}-{longArray.join('')}</small>
  )

}

  

export {ShortRead, LongRead};
