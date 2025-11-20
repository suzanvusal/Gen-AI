import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
        
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Coming Soon</h1>
          <p className="text-xl text-gray-600 mb-8">
            Stay tuned for insights on DevOps, Cloud Engineering, and Technology!
          </p>
          <div className="text-gray-500">
            This space will feature articles about AWS, Azure, DevOps practices, and more.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
