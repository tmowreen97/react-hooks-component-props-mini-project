import React from "react";
import Article from "./Article";
import blogData from "../data/blog";


function ArticleList(){
  const list = blogData.posts.map((element)=>{
    return <Article key={element.id} title={element.title} date={element.date} preview={element.preview} minutes={element.minutes} />
  })
  return (
    <main>
      {list}
    </main>
  )

}

export default ArticleList;