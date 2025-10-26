import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Recycle, Heart, Package } from 'lucide-react';
import { products, heroImage, sustainabilityFeatures } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useCart } from '../context/CartContext';
import { toast } from '../hooks/use-toast';

const Home = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 4);

  const iconMap = {
    Leaf: Leaf,
    Recycle: Recycle,
    Heart: Heart,
    Package: Package
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sustainable Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/80 to-green-900/60"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Wear the Change.
              <br />
              <span className="text-amber-200">Live Only Green.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-200 leading-relaxed">
              Discover sustainable fashion made from organic hemp and bamboo. Quality products that care for you and the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-amber-100 text-green-900 hover:bg-amber-200 font-semibold w-full sm:w-auto transition-all duration-300 hover:scale-105">
                  Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-900 w-full sm:w-auto transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Features */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Why Choose Only Green?</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              We're committed to creating fashion that doesn't cost the earth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-700 to-green-800 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-amber-50" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-900 mb-2">{feature.title}</h3>
                    <p className="text-stone-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Featured Products</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Explore our carefully curated collection of sustainable essentials
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <Card key={product.id} className="group overflow-hidden border-stone-200 hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-900 mb-1 group-hover:text-green-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-sm mb-3">{product.category}</p>
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
          <div className="text-center mt-10">
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-all duration-300">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Join the Green Movement
            </h2>
            <p className="text-lg md:text-xl text-stone-200">
              Every purchase you make helps create a more sustainable future. Start your journey with Only Green today.
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-amber-100 text-green-900 hover:bg-amber-200 font-semibold transition-all duration-300 hover:scale-105">
                Start Shopping <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;