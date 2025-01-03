'use client'

import { useState } from 'react'
import { products } from './data/products'  // Změněno z '@/app/data/products'
import CompareDrawer from './components/CompareDrawer'  // Změněno z '@/app/components/CompareDrawer'

export default function Home() {
  const [compareProducts, setCompareProducts] = useState<string[]>([])

  const handleCompare = (productId: string, isChecked: boolean) => {
    if (isChecked) {
      setCompareProducts(prev => [...prev, productId])
    } else {
      setCompareProducts(prev => prev.filter(id => id !== productId))
    }
  }

  return (
    <main className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <h2>{product.name}</h2>
            <p>{product.price} Kč</p>
            <label>
              <input
                type="checkbox"
                checked={compareProducts.includes(product.id)}
                onChange={(e) => handleCompare(product.id, e.target.checked)}
              />
              {' '}Porovnat
            </label>
          </div>
        ))}
      </div>
      <CompareDrawer 
        products={compareProducts}
        onClose={(product) => handleCompare(product, false)}
      />
    </main>
  )
}