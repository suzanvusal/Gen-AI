#!/bin/bash

# Only Green - Package Creator
# This script creates a clean, downloadable package of your project

echo "================================================"
echo "   Only Green - Creating Download Package"
echo "================================================"
echo ""

# Create package directory
PACKAGE_DIR="only-green-package"
echo "Creating package directory: $PACKAGE_DIR"
mkdir -p $PACKAGE_DIR

# Copy frontend
echo "Copying frontend files..."
mkdir -p $PACKAGE_DIR/frontend/src
mkdir -p $PACKAGE_DIR/frontend/public

# Copy frontend source files
cp -r /app/frontend/src/* $PACKAGE_DIR/frontend/src/
cp -r /app/frontend/public/* $PACKAGE_DIR/frontend/public/
cp /app/frontend/package.json $PACKAGE_DIR/frontend/
cp /app/frontend/tailwind.config.js $PACKAGE_DIR/frontend/
cp /app/frontend/craco.config.js $PACKAGE_DIR/frontend/ 2>/dev/null || true
cp /app/frontend/eslint.config.mjs $PACKAGE_DIR/frontend/ 2>/dev/null || true

# Create frontend .env template
cat > $PACKAGE_DIR/frontend/.env.example << 'EOF'
REACT_APP_BACKEND_URL=http://localhost:8001
EOF

# Copy backend
echo "Copying backend files..."
mkdir -p $PACKAGE_DIR/backend
cp /app/backend/server.py $PACKAGE_DIR/backend/
cp /app/backend/requirements.txt $PACKAGE_DIR/backend/

# Create backend .env template
cat > $PACKAGE_DIR/backend/.env.example << 'EOF'
MONGO_URL=mongodb://localhost:27017/onlygreen
DB_NAME=onlygreen
PORT=8001
EOF

# Copy documentation
echo "Copying documentation..."
cp /app/LOCAL_SETUP_GUIDE.md $PACKAGE_DIR/
cp /app/DEPLOYMENT.md $PACKAGE_DIR/
cp /app/DOWNLOAD_INSTRUCTIONS.md $PACKAGE_DIR/
cp /app/README.md $PACKAGE_DIR/
cp /app/QUICK_REFERENCE.md $PACKAGE_DIR/

# Create .gitignore
echo "Creating .gitignore..."
cat > $PACKAGE_DIR/.gitignore << 'EOF'
# Dependencies
node_modules/
__pycache__/
*.pyc
.Python
venv/
env/
ENV/

# Build outputs
frontend/build/
*.log

# Environment variables
.env
.env.local
.env.production

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Testing
coverage/
.pytest_cache/
EOF

# Create startup script
echo "Creating startup scripts..."
cat > $PACKAGE_DIR/start.sh << 'EOF'
#!/bin/bash

echo "Starting Only Green eCommerce..."
echo ""

# Check if MongoDB is needed
echo "Make sure MongoDB is running!"
echo ""

# Start backend
echo "Starting backend on http://localhost:8001..."
cd backend
python -m uvicorn server:app --reload --host 0.0.0.0 --port 8001 &
BACKEND_PID=$!

# Wait a bit for backend to start
sleep 3

# Start frontend
echo "Starting frontend on http://localhost:3000..."
cd ../frontend
yarn start &
FRONTEND_PID=$!

echo ""
echo "================================"
echo "✅ Only Green is now running!"
echo "================================"
echo ""
echo "Frontend: http://localhost:3000"
echo "Backend:  http://localhost:8001"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for Ctrl+C
trap "echo 'Stopping servers...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
EOF

chmod +x $PACKAGE_DIR/start.sh

# Create Windows startup script
cat > $PACKAGE_DIR/start.bat << 'EOF'
@echo off
echo Starting Only Green eCommerce...
echo.

echo Make sure MongoDB is running!
echo.

echo Starting backend on http://localhost:8001...
cd backend
start cmd /k "python -m uvicorn server:app --reload --host 0.0.0.0 --port 8001"

timeout /t 3 >nul

echo Starting frontend on http://localhost:3000...
cd ..\frontend
start cmd /k "yarn start"

echo.
echo ================================
echo Only Green is now running!
echo ================================
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:8001
echo.
echo Close both windows to stop servers
echo.
pause
EOF

# Create setup script
cat > $PACKAGE_DIR/setup.sh << 'EOF'
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
EOF

chmod +x $PACKAGE_DIR/setup.sh

# Create Windows setup script
cat > $PACKAGE_DIR/setup.bat << 'EOF'
@echo off
echo ================================================
echo    Only Green - Setup Script
echo ================================================
echo.

echo Setting up frontend...
cd frontend
echo Installing frontend dependencies...
call yarn install
cd ..

echo.
echo Setting up backend...
cd backend
echo Installing backend dependencies...
pip install -r requirements.txt
cd ..

echo.
echo Creating environment files...
if not exist "frontend\.env" (
    copy "frontend\.env.example" "frontend\.env"
    echo Created frontend/.env
)

if not exist "backend\.env" (
    copy "backend\.env.example" "backend\.env"
    echo Created backend/.env
)

echo.
echo ================================================
echo Setup Complete!
echo ================================================
echo.
echo Next steps:
echo 1. Configure MongoDB connection in backend/.env
echo 2. Run start.bat to start the application
echo 3. Open http://localhost:3000 in your browser
echo.
echo For detailed instructions, see LOCAL_SETUP_GUIDE.md
echo.
pause
EOF

# Create archive
echo ""
echo "Creating archive..."
cd $PACKAGE_DIR
cd ..
tar -czf only-green-package.tar.gz $PACKAGE_DIR

echo ""
echo "================================================"
echo "✅ Package created successfully!"
echo "================================================"
echo ""
echo "Package location: $(pwd)/only-green-package.tar.gz"
echo "Package folder: $(pwd)/$PACKAGE_DIR"
echo ""
echo "To download:"
echo "1. Download: only-green-package.tar.gz"
echo "2. Extract on your computer"
echo "3. Run: ./setup.sh (Mac/Linux) or setup.bat (Windows)"
echo "4. Run: ./start.sh (Mac/Linux) or start.bat (Windows)"
echo ""
echo "📚 Read README.md for complete documentation"
echo ""
