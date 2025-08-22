"use client"
import { useSession, signIn } from "next-auth/react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AddProductPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [form, setForm] = useState({
    category: "",
    name: "",
    seller: "",
    price: "",
    stock: "",
    ratings: "",
    ratingsCount: "",
    img: "",
    shipping: "",
    quantity: "",
  })

  // Redirect if unauthenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn() // redirect to signIn page
    }
  }, [status])

  if (status === "loading") return <p>Loading...</p>
  if (!session) return null // not authenticated yet

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      ...form,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
      ratings: parseFloat(form.ratings),
      ratingsCount: parseInt(form.ratingsCount),
      shipping: parseFloat(form.shipping),
      quantity: parseInt(form.quantity),
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })

    const data = await res.json()
    if (res.ok) {
      alert("Product added successfully!")
      setForm({
        category: "",
        name: "",
        seller: "",
        price: "",
        stock: "",
        ratings: "",
        ratingsCount: "",
        img: "",
        shipping: "",
        quantity: "",
      })
    } else {
      alert(data.message)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 border rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="seller"
          placeholder="Seller"
          value={form.seller}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="ratings"
          placeholder="Ratings"
          value={form.ratings}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="ratingsCount"
          placeholder="Ratings Count"
          value={form.ratingsCount}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={form.img}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="shipping"
          placeholder="Shipping"
          value={form.shipping}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <button type="submit" className="btn btn-primary col-span-full mt-4">
          Add Product
        </button>
      </form>
    </div>
  )
}
