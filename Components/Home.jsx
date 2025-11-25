import React, { useEffect, useState } from 'react'

const Home = () => {
  const [value, setValue] = useState("")

  useEffect(() => {
    async function getdata() {
      const data = await fetch("https://backend-blog-delta.vercel.app/blogs")
      const json = await data.json()
      console.log(json)
      setValue(json)
    }
    getdata()
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">All Blogs</h1>

      {value &&
        value.map((item, idx) => {
          return (
            <div
              key={idx}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-6 mb-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{item.content}</p>
              <h4 className="text-sm font-medium text-gray-500">✍️ {item.author}</h4>
            </div>
          )
        })}
    </div>
  )
}

export default Home
