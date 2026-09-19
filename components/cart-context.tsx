'use client'

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Product } from '@/lib/products'

export type CartItem = Product & { quantity: number }

type CartContextValue = {
  items: CartItem[]
  isOpen: boolean
  count: number
  subtotal: number
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  function addItem(product: Product) {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsOpen(true)
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  function updateQuantity(id: string, quantity: number) {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((item) => item.id !== id)
        : prev.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          ),
    )
  }

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )
    return {
      items,
      isOpen,
      count,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
