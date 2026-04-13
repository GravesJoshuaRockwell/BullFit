"use client";

import { useState } from "react";
import { ShoppingBag, Zap, Trophy } from "lucide-react";

const designs = {
  "Women's Swimwear": [
    { id: "W-SW-01", name: "The Stampede", desc: "Black bikini, blood red trim, bull logo hip", price: "$88-98", hero: true },
    { id: "W-SW-02", name: "Solar Surge", desc: "Burnt orange/terracotta color block, high-waist", price: "$92-105" },
    { id: "W-SW-03", name: "Iron Maiden", desc: "Black racerback one-piece, oval cutout back", price: "$95-115", hero: true },
    { id: "W-SW-04", name: "Coral Charge", desc: "Bold botanical print, halter top", price: "$95-110" },
    { id: "W-SW-05", name: "Ghost Camo", desc: "White-on-white tonal camo, red ties (LIMITED)", price: "$105-120" },
    { id: "W-SW-06", name: "Electric Tide", desc: "Ribbed neon bikini (blue/coral/lime)", price: "$85-100" },
  ],
  "Women's Gym": [
    { id: "W-GYM-01", name: "Stampede Set", desc: "Hero matching legging + sports bra", price: "$135-155", hero: true },
    { id: "W-GYM-02", name: "Predator Legging", desc: "Lightning bolt allover print, full length", price: "$78-90" },
    { id: "W-GYM-03", name: "Iron Maiden Sports Bra", desc: "High-impact, mesh side panels", price: "$65-80" },
    { id: "W-GYM-04", name: "Desert Storm Crop", desc: "Casual oversized crop, wearable everywhere", price: "$42-52" },
    { id: "W-GYM-05", name: "Coral Charge Shorts", desc: "Biker shorts, matches swim line", price: "$55-68" },
    { id: "W-GYM-06", name: "Ghost Camo Full Set", desc: "Collector legging+bra+jacket drop (LIMITED)", price: "$195-225" },
  ],
  "Men's Gym Shorts": [
    { id: "M-GYM-01", name: "Apex Bull", desc: "5\" bodybuilding short, quad-friendly cut", price: "$58-72", hero: true },
    { id: "M-GYM-02", name: "Predator", desc: "Gold lightning bolt allover on black", price: "$58-68" },
    { id: "M-GYM-03", name: "Desert Storm", desc: "Custom bull-skull camo, 7\" versatile", price: "$62-72" },
    { id: "M-GYM-04", name: "Stealth", desc: "Minimal luxury, tonal logo, premium fabric", price: "$68-82" },
    { id: "M-GYM-05", name: "Cowabunga", desc: "Named after BV pre-workout, cotton casual", price: "$52-62" },
    { id: "M-GYM-06", name: "Midnight Metallic", desc: "Navy-to-black galaxy/nebula sublimation", price: "$62-72" },
  ],
  "Men's Swim Shorts": [
    { id: "M-SW-01", name: "Fortune Bull", desc: "Hero swim trunk, tonal bull repeat, compression liner", price: "$85-95", hero: true },
    { id: "M-SW-02", name: "Miami Vice", desc: "Pink/aqua/white retro color block", price: "$80-92" },
    { id: "M-SW-03", name: "Solar Surge", desc: "Dramatic oversized tropical print", price: "$85-95" },
    { id: "M-SW-04", name: "Ancient Combat", desc: "Half warrior art panel, half solid (LIMITED)", price: "$88-98" },
    { id: "M-SW-05", name: "Cove Killer", desc: "Direct competitor, minimal/clean", price: "$55-70" },
    { id: "M-SW-06", name: "Predator Swim", desc: "Lightning pattern gym short goes to pool", price: "$78-88" },
  ],
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Women's Swimwear");
  const [selectedDesign, setSelectedDesign] = useState<any>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bull-gradient py-20 px-6 text-center">
        <h1 className="text-6xl font-black mb-4">⚔️ BULLFIT APPAREL</h1>
        <p className="text-2xl text-gray-300 mb-2">Fortune Favors the Bulls</p>
        <p className="text-lg text-gray-400 mb-8">Premium Gym & Swim Wear Collection</p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-red-700 hover:bg-red-800 font-bold text-lg rounded transition">
            <ShoppingBag className="inline mr-2 w-5 h-5" />
            Shop Now
          </button>
          <button className="px-8 py-3 border-2 border-red-700 hover:bg-red-700/20 font-bold text-lg rounded transition">
            View Specs
          </button>
        </div>
      </section>

      {/* Hero Products */}
      <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-4xl font-black text-center mb-12">⭐ HERO PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "The Stampede", cat: "Women's Swimwear", price: "$88-98" },
            { name: "Iron Maiden", cat: "Women's Swimwear", price: "$95-115" },
            { name: "Apex Bull", cat: "Men's Gym Shorts", price: "$58-72" },
            { name: "Fortune Bull", cat: "Men's Swim Shorts", price: "$85-95" },
          ].map((p) => (
            <div key={p.name} className="p-6 bg-black border border-red-700 rounded hover-scale cursor-pointer">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="font-black text-lg mb-2">{p.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{p.cat}</p>
              <p className="text-red-500 font-bold">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Browser */}
      <section className="py-16 px-6 bg-black">
        <h2 className="text-4xl font-black text-center mb-12">24 DESIGN COLLECTION</h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(designs).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 font-bold rounded transition ${
                activeCategory === cat
                  ? "bg-red-700 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Designs Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs[activeCategory as keyof typeof designs].map((design: any) => (
            <div
              key={design.id}
              onClick={() => setSelectedDesign(design)}
              className={`p-6 rounded border-2 cursor-pointer hover-scale transition ${
                design.hero
                  ? "border-red-700 bg-red-900/20"
                  : "border-gray-700 bg-gray-900"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-black text-lg">{design.name}</h3>
                  <p className="text-xs text-gray-500">{design.id}</p>
                </div>
                {design.hero && <Trophy className="w-5 h-5 text-red-500" />}
              </div>
              <p className="text-sm text-gray-300 mb-4">{design.desc}</p>
              <p className="font-bold text-red-500">{design.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-8">THE STRATEGY</h2>
          <div className="space-y-6 text-lg text-gray-300">
            <div className="border-l-4 border-red-700 pl-6">
              <h3 className="font-black text-white mb-2">Phase 1: Foundation</h3>
              <p>Months 1-4: Prototype 3 hero SKUs (Stampede, Fortune Bull, Apex Bull)</p>
              <p className="text-sm text-gray-500 mt-2">Investment: $25k-$60k</p>
            </div>
            <div className="border-l-4 border-red-700 pl-6">
              <h3 className="font-black text-white mb-2">Phase 2: First Drop</h3>
              <p>Months 5-7: Launch to The Herd (7,000+ existing customers)</p>
              <p className="text-sm text-gray-500 mt-2">Bundle with supplements for 20%+ conversion</p>
            </div>
            <div className="border-l-4 border-red-700 pl-6">
              <h3 className="font-black text-white mb-2">Phase 3: Expansion</h3>
              <p>Months 8-11: Ghost Camo limited drop, 6 more SKUs, cross-promotion</p>
              <p className="text-sm text-gray-500 mt-2">Build collector culture</p>
            </div>
            <div className="border-l-4 border-red-700 pl-6">
              <h3 className="font-black text-white mb-2">Phase 4: Scale</h3>
              <p>Months 12-18: Full 20+ SKU catalog, seasonal drops, wholesale</p>
              <p className="text-sm text-gray-500 mt-2">Target: $500k-$1.2M ARR</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bull-gradient py-12 px-6 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to Join The Herd?</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          24 designs. 4 categories. Premium quality. Built for athletes who demand more.
        </p>
        <button className="px-10 py-4 bg-white text-red-700 font-black text-lg rounded hover:bg-gray-100 transition">
          <Zap className="inline mr-2 w-5 h-5" />
          Pre-Order Hero Products
        </button>
      </section>

      {/* Modal */}
      {selectedDesign && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50"
          onClick={() => setSelectedDesign(null)}
        >
          <div
            className="bg-gray-900 p-8 rounded max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-black text-2xl mb-2">{selectedDesign.name}</h3>
            <p className="text-gray-500 mb-4">{selectedDesign.id}</p>
            <p className="text-gray-300 mb-6">{selectedDesign.desc}</p>
            <p className="text-2xl font-bold text-red-500 mb-6">{selectedDesign.price}</p>
            <button className="w-full px-6 py-3 bg-red-700 hover:bg-red-800 font-bold rounded transition">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
