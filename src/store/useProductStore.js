import { create } from 'zustand'
import data from '../data/data.json'

const useProductStore = create((set, get) => ({
  products: data.products,
  categories: data.categories,
  selectedCategory: undefined, 
  
  setSelectedCategory: (categoryId) => {
    set({ selectedCategory: categoryId === null ? undefined : categoryId })
  },
  

  getFilteredProducts: () => {
    const { products, selectedCategory } = get()
    if (selectedCategory === undefined) return products
    return products.filter(product => product.categoryId === selectedCategory)
  },
  
  getCategoryTitle: (categoryId) => {
    const { categories } = get()
    const category = categories.find(c => c.id === categoryId)
    return category ? category.title : 'Без категории'
  }
}))

export default useProductStore