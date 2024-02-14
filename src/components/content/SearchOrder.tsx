import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
export default function SearchOrder() {
    const [query , setQuery] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        navigate(`/cart/${query}`)
        setQuery("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="search" onChange={(e) => setQuery(e.target.value) } placeholder="Search order by ID"/>
    </form>
  )
}