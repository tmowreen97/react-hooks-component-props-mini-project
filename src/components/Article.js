import react from "react";
import { LongRead, ShortRead } from "./Minutes";


function Article({ title, date = "January 1, 1970", preview, minutes}){
  console.log(minutes)
  return (
    <article>
      <h3>{title}</h3>
      {!{minutes}<=30 ? console.log('30') : console.log('more')}
      <small>{({minutes}<=30) ? <ShortRead minutes={minutes} date={date}/> : <LongRead minutes={minutes} date={date}/>}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article;
