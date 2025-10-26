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
