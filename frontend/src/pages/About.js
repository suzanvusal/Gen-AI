import React from 'react';
import { Leaf, Users, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability First',
      description: 'We prioritize eco-friendly materials and production methods in everything we create.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a global community committed to sustainable fashion and conscious living.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'High-quality products that are built to last, reducing waste and promoting longevity.'
    },
    {
      icon: Heart,
      title: 'Ethical Production',
      description: 'Fair wages, safe working conditions, and respect for all workers in our supply chain.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Only Green</h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-3xl mx-auto">
            We're on a mission to revolutionize fashion through sustainable practices and eco-friendly materials
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                Only Green was born from a simple yet powerful idea: fashion doesn't have to harm the planet.
                Founded in 2020, we set out to prove that sustainable materials like hemp and bamboo could
                create clothing that's not only better for the environment but also more comfortable and durable.
              </p>
              <p>
                Every product we create is a testament to our commitment to sustainability. From our organic hemp
                t-shirts to our bamboo accessories, we carefully select materials that are renewable, biodegradable,
                and produced with minimal environmental impact.
              </p>
              <p>
                But sustainability isn't just about materials—it's about people too. We work directly with ethical
                manufacturers who share our values, ensuring fair wages and safe working conditions throughout our
                supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-700 to-green-800 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-amber-50" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-900 mb-3">{value.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-bold text-green-700 mb-2">50K+</div>
                <p className="text-stone-600">Sustainable Products Sold</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-700 mb-2">100%</div>
                <p className="text-stone-600">Carbon Neutral Operations</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-700 mb-2">25+</div>
                <p className="text-stone-600">Ethical Partner Manufacturers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Join Our Movement</h2>
            <p className="text-lg md:text-xl text-stone-200">
              Every purchase you make with Only Green is a vote for a more sustainable future.
              Together, we can prove that fashion can be beautiful, comfortable, and kind to our planet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;