import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navi = useNavigate()
    const [title, setTitle] = useState("")
    const [author, setAuther] = useState("")
    const [content, setContent] = useState("")
  return (
         <form className="flex flex-col gap-4 p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg">

         <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
        Create New Blog
      </h2>

      <input  onChange={(e)=>{
        setTitle(e.target.value)
      }} 
        type='text' 
        value={title}
        placeholder='Enter title' 
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input onChange={(e)=>{
        setAuther(e.target.value)
      }} 
        type='text' 
        value={author}
        placeholder='Enter Author name' 
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea onChange={(e)=>{
        setContent(e.target.value)
      }}
        type="text" 
        value={content}
        placeholder='Enter Content' 
        className="border border-gray-300 rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>
      <button onClick={async()=>{
       
        const data = await fetch("http://localhost:8080/newblog",{
            method : "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                author:author,
                content:content,
                title:title,
            })
        })
        const json = await data.json()
        console.log(json)
        navi("/home")
      }}
        type="submit" 
        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Add Blog
      </button>
    </form>
  )
}

export default Form