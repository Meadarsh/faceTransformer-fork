"use client"
import { useState } from "react"
import type React from "react"

const Page = () => {
  const [rating, setRating] = useState(0)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    review: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleStarClick = (star: number) => {
    setRating(star)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, service, review } = formData

    if (!name || !email || !rating || !service || !review) return

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, rating, service, review }),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: "", email: "", service: "", review: "" })
          setRating(0)
        }, 3000)
      }
    } catch (error) {
      console.error("Error submitting review:", error)
    }
  }

  const services = [
    "Facial Treatment",
    "Skin Restoration",
    "Cosmetic Enhancement",
    "Anti-Aging Treatment",
    "Skincare Consultation",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-[#DED0C5] py-16">
      <div className="mx-auto px-6 md:px-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-[52px] md:text-[70px] text-white font-black mb-8">Leave a Review</h1>
          <div className="h-px w-24 bg-[#796355] mb-8"></div>
          <p className="text-[rgb(121,99,85)] max-w-2xl">
            We value your feedback. Please share your experience with our services.
          </p>
        </header>

        {/* Review Form */}
        <div className="bg-white/20 p-8 rounded-sm shadow-md max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-[#796355] text-4xl mb-4">Thank You!</div>
              <p>Your review has been submitted successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                required
                onChange={handleChange}
                className="w-full p-3"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                required
                onChange={handleChange}
                className="w-full p-3"
              />

              <div>
                <label className="block mb-2 text-[#796355]">Your Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="text-3xl text-[#796355]"
                    >
                      {star <= (hoveredStar || rating) ? "★" : "☆"}
                    </button>
                  ))}
                </div>
              </div>

              <select name="service" required value={formData.service} onChange={handleChange} className="w-full p-3">
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <textarea
                name="review"
                required
                rows={6}
                value={formData.review}
                placeholder="Your Review"
                onChange={handleChange}
                className="w-full p-3"
              />

              <button
                type="submit"
                className="w-full bg-[#796355] text-white py-3 hover:bg-[#8a7264] transition-colors"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Page

