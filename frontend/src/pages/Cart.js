import React from 'react';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center space-y-6 p-8">
          <div className="text-6xl">🛒</div>
          <h2 className="text-3xl font-bold text-green-900">Your Cart is Empty</h2>
          <p className="text-stone-600">Start adding some sustainable products to your cart!</p>
          <Link to="/shop">
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              Continue Shopping <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-800 to-green-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Shopping Cart</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <Card key={item.id} className="overflow-hidden border-stone-200">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-32 h-32 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="font-semibold text-green-900 text-lg">{item.name}</h3>
                        <p className="text-stone-500 text-sm">{item.category}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 border-green-700 text-green-700 hover:bg-green-50"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="font-semibold text-green-900 w-8 text-center">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 border-green-700 text-green-700 hover:bg-green-50"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-4">
                          <span className="text-xl font-bold text-green-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => removeFromCart(item.id)}
                            className="border-red-200 text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button
              variant="outline"
              onClick={clearCart}
              className="border-red-200 text-red-600 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4 mr-2" /> Clear Cart
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-stone-200 sticky top-24">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-bold text-green-900">Order Summary</h2>
                <div className="space-y-3 text-stone-700">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold text-green-700">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="font-semibold">${(getCartTotal() * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-stone-200 pt-3">
                    <div className="flex justify-between text-xl">
                      <span className="font-bold text-green-900">Total</span>
                      <span className="font-bold text-green-800">
                        ${(getCartTotal() * 1.08).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <Link to="/checkout">
                  <Button size="lg" className="w-full bg-green-700 hover:bg-green-800 transition-all duration-300 hover:scale-105">
                    Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/shop">
                  <Button variant="outline" size="lg" className="w-full border-green-700 text-green-700 hover:bg-green-50">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;