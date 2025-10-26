import React, { useState } from 'react';
import { products } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useCart } from '../context/CartContext';
import { toast } from '../hooks/use-toast';
import { Filter } from 'lucide-react';

const Shop = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-800 to-green-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Sustainable Collection</h1>
          <p className="text-lg text-stone-200 max-w-2xl mx-auto">
            Browse our carefully curated selection of eco-friendly products
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-green-800" />
            <h2 className="text-lg font-semibold text-green-900">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category
                  ? 'bg-green-700 hover:bg-green-800'
                  : 'border-green-700 text-green-700 hover:bg-green-50'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="group overflow-hidden border-stone-200 hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden bg-stone-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-5">
                <div className="mb-3">
                  <h3 className="font-semibold text-green-900 mb-1 group-hover:text-green-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-sm">{product.category}</p>
                </div>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-800">${product.price}</span>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="bg-green-700 hover:bg-green-800 transition-all duration-200 hover:scale-105"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-600 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;