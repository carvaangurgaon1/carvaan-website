"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlogHub() {
  const blogs = [
    {
      id: 1,
      title: "10 Hidden Himalayan Treks You Must Explore",
      author: "By Riya Sharma",
      image: "/images/blog-himalaya.jpg", // 🔁 replace with actual image later
      date: "Oct 25, 2025",
      excerpt:
        "Uncover the untouched beauty of the Himalayas — from Tirthan Valley to Turtuk, here are trails even seasoned trekkers don’t know about.",
      link: "/blog/himalayan-treks",
    },
    {
      id: 2,
      title: "Solo Travel in India: A Complete Guide",
      author: "By Aarav Mehta",
      image: "/images/blog-solo.jpg",
      date: "Oct 10, 2025",
      excerpt:
        "Thinking about solo travel? Here’s your guide to making the most of India’s most exciting destinations, safely and confidently.",
      link: "/blog/solo-travel-guide",
    },
    {
      id: 3,
      title: "Food Trails: Where Taste Meets Travel",
      author: "By Carvaan Community",
      image: "/images/blog-food.jpg",
      date: "Sep 29, 2025",
      excerpt:
        "Because travel isn’t complete without good food — explore India’s top culinary destinations and what makes each one unique.",
      link: "/blog/food-trails",
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-purple-700 mb-3"
        >
          Blog Hub 📰
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Stories, guides, and tips from travelers across the Carvaan community.
          Get inspired for your next journey!
        </p>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {blogs.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50 border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Blog Image */}
              <div className="relative w-full h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 text-left">
                <p className="text-sm text-gray-400">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3 hover:text-pink-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <p className="text-sm text-gray-500 mb-2">{post.author}</p>
                <Link
                  href={post.link}
                  className="text-pink-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
          >
            View All Blogs →
          </Link>
        </div>
      </div>
    </section>
  );
}
