#!/bin/bash

echo "================================================"
echo "   Only Green - Setup Script"
echo "================================================"
echo ""

# Setup frontend
echo "Setting up frontend..."
cd frontend
echo "Installing frontend dependencies (this may take a few minutes)..."
yarn install
cd ..

# Setup backend
echo ""
echo "Setting up backend..."
cd backend
echo "Installing backend dependencies..."
pip install -r requirements.txt
cd ..

# Copy .env files
echo ""
echo "Creating environment files..."
if [ ! -f frontend/.env ]; then
    cp frontend/.env.example frontend/.env
    echo "✅ Created frontend/.env"
fi

if [ ! -f backend/.env ]; then
    cp backend/.env.example backend/.env
    echo "✅ Created backend/.env"
fi

echo ""
echo "================================================"
echo "✅ Setup Complete!"
echo "================================================"
echo ""
echo "Next steps:"
echo "1. Configure MongoDB connection in backend/.env"
echo "2. Run ./start.sh to start the application"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "For detailed instructions, see LOCAL_SETUP_GUIDE.md"
echo ""
