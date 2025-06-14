import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-amber-50 text-neutral-800">
      <header className="p-6 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-amber-900">Auraville</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#products" className="hover:text-amber-700">Products</a>
          <a href="#about" className="hover:text-amber-700">About</a>
          <a href="#contact" className="hover:text-amber-700">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-between p-10 md:p-20 bg-[url('/images/nuts-bg.jpg')] bg-cover bg-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900">Natural Goodness in Every Bite</h2>
          <p className="text-lg text-neutral-700">Premium dry fruits and nuts curated with love. Experience the purity and taste of Auraville.</p>
          <Button className="bg-amber-700 hover:bg-amber-800 text-white text-lg">Shop Now</Button>
        </motion.div>
        <img src="/images/hero-nuts.png" alt="Auraville Nuts" className="w-full md:w-1/2 mt-10 md:mt-0" />
      </section>

      <section id="products" className="py-16 px-6 md:px-20 bg-white">
        <h3 className="text-3xl font-bold mb-10 text-center text-amber-800">Our Bestsellers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Almonds', 'Cashews', 'Pistachios'].map((item, i) => (
            <Card key={i} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-4">
                <img src={`/images/${item.toLowerCase()}.jpg`} alt={item} className="w-full h-48 object-cover rounded-xl" />
                <h4 className="mt-4 text-xl font-semibold text-amber-800">{item}</h4>
                <p className="text-sm text-neutral-600">Fresh, crunchy, and packed with nutrition.</p>
                <Button className="mt-4 w-full bg-amber-600 hover:bg-amber-700 text-white">Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 px-6 md:px-20 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-amber-800 mb-6">About Auraville</h3>
          <p className="text-neutral-700 text-lg">Auraville is a passion-driven brand born from the idea of offering wholesome, natural dry fruits to every Indian household. Sourced responsibly and packaged with care, we’re here to make healthy snacking accessible and enjoyable.</p>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-amber-800 mb-6 text-center">Get in Touch</h3>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <textarea rows="4" className="w-full p-3 border border-neutral-300 rounded-xl" placeholder="Your Message" />
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">Send Message</Button>
          </form>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-neutral-600 bg-amber-100">
        &copy; 2025 Auraville. All rights reserved.
      </footer>
    </main>
  );
}
