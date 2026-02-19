"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function TubelightNav({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {items.map((item) => {
        const isActive = activeTab === item.name
        return (
          <a
            key={item.name}
            href={item.url}
            onClick={() => setActiveTab(item.name)}
            className={cn(
              "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-colors",
              "text-gray-600 hover:text-gray-900",
              isActive && "text-gray-900",
            )}
          >
            <span>{item.name}</span>
            {isActive && (
              <motion.div
                layoutId="lamp"
                className="absolute inset-0 w-full bg-gray-100 rounded-full -z-10"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-t-full">
                  <div className="absolute w-12 h-6 bg-gray-400/30 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-gray-400/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-gray-400/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>
            )}
          </a>
        )
      })}
    </div>
  )
}
