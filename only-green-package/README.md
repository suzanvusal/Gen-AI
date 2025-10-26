# Only Green - Sustainable eCommerce Website 🌱

![Only Green](https://img.shields.io/badge/Only-Green-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.110-009688?style=flat-square&logo=fastapi)
![MongoDB](https://img.shields.io/badge/MongoDB-4.5-47A248?style=flat-square&logo=mongodb)

A modern, eco-friendly eCommerce platform for sustainable hemp and bamboo products.

## ✨ Features

### 🛍️ Core Functionality
- **Product Catalog**: 12 curated sustainable products
- **Shopping Cart**: Session-based cart system
- **Product Categories**: T-Shirts, Jackets, Bottles, Accessories
- **Checkout Flow**: Complete checkout mockup
- **Responsive Design**: Mobile-first design approach

### 🎨 Design
- **Color Scheme**: Forest green (#166534) & Earthy beige
- **UI Components**: Built with shadcn/ui
- **Animations**: Smooth hover effects and transitions
- **Typography**: Clean, readable fonts

### 📄 Pages
1. **Home** - Hero section, featured products, sustainability highlights
2. **Shop** - Full product catalog with filtering
3. **Cart** - Cart management with quantity controls
4. **Checkout** - Order placement mockup
5. **About Us** - Company story and values
6. **Contact** - Contact form and information

## 🚀 Quick Start

See [LOCAL_SETUP_GUIDE.md](LOCAL_SETUP_GUIDE.md) for detailed instructions.

```bash
# Install dependencies
cd frontend && yarn install
cd ../backend && pip install -r requirements.txt

# Start backend
cd backend
python -m uvicorn server:app --reload --host 0.0.0.0 --port 8001

# Start frontend (new terminal)
cd frontend
yarn start
```

Open http://localhost:3000

## 📦 Tech Stack

### Frontend
- **React 19** - UI framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Axios** - HTTP client
- **Lucide React** - Icons

### Backend
- **FastAPI** - Python web framework
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

### Database
- **MongoDB** - NoSQL database

## 📁 Project Structure

```
only-green/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # shadcn components
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── context/
│   │   │   └── CartContext.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Shop.js
│   │   │   ├── Cart.js
│   │   │   ├── Checkout.js
│   │   │   ├── About.js
│   │   │   └── Contact.js
│   │   ├── App.js
│   │   ├── mock.js         # Product data
│   │   └── index.css
│   └── package.json
├── backend/
│   ├── server.py           # FastAPI app
│   └── requirements.txt
├── LOCAL_SETUP_GUIDE.md   # Setup instructions
├── DEPLOYMENT.md          # Deployment guide
└── README.md
```

## 🎯 Product Categories

1. **T-Shirts** - Organic hemp t-shirts and polos
2. **Jackets** - Sustainable hemp and cotton jackets
3. **Bottles** - Bamboo water bottles and containers
4. **Accessories** - Bamboo toothbrushes and lifestyle sets
5. **Collections** - Curated product bundles

## 🌍 Sustainability Features

- ♻️ **100% Organic** - Certified organic materials
- 🌱 **Carbon Neutral** - Offset carbon emissions
- 🤝 **Fair Trade** - Ethical production practices
- 📦 **Zero Waste** - Biodegradable packaging

## 🔧 Configuration

### Frontend (.env)
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017/onlygreen
DB_NAME=onlygreen
PORT=8001
```

## 📚 Documentation

- [Local Setup Guide](LOCAL_SETUP_GUIDE.md) - Run locally
- [Deployment Guide](DEPLOYMENT.md) - Deploy for free
- [Download Instructions](DOWNLOAD_INSTRUCTIONS.md) - Get the files

## 🚢 Deployment

Deploy for **FREE** using:
- **Frontend**: Vercel or Netlify
- **Backend**: Railway or Render
- **Database**: MongoDB Atlas

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🎨 Color Palette

```
Primary Green:   #166534 (forest green)
Light Green:     #15803d
Beige/Cream:     #fef3c7
Stone:           #78716c
White:           #ffffff
```

## 📝 Making Changes

### Update Products
Edit `frontend/src/mock.js`:
```javascript
export const products = [
  {
    id: 1,
    name: 'Your Product',
    price: 29.99,
    category: 'Category',
    image: 'image-url',
    description: 'Description'
  }
];
```

### Modify Colors
Edit `frontend/src/index.css` - Update CSS variables:
```css
:root {
  --primary: 142 71% 45%;  /* Green */
  --accent: 39 100% 57%;   /* Beige */
}
```

### Add Backend Routes
Edit `backend/server.py`:
```python
@api_router.post("/products")
async def create_product(product: Product):
    # Your logic here
    return product
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 or 8001
kill -9 $(lsof -ti:3000)
kill -9 $(lsof -ti:8001)
```

### MongoDB Connection Failed
- Ensure MongoDB is running
- Check connection string in `backend/.env`
- For Atlas, whitelist your IP address

### Frontend Can't Connect to Backend
- Verify backend is running on port 8001
- Check `REACT_APP_BACKEND_URL` in `frontend/.env`
- Clear browser cache

## 📊 Features Roadmap

### Current Version (v1.0)
- ✅ Product catalog
- ✅ Shopping cart
- ✅ Checkout mockup
- ✅ Responsive design
- ✅ All core pages

### Future Enhancements (v2.0)
- [ ] User authentication
- [ ] Payment integration (Stripe)
- [ ] Order history
- [ ] Product reviews
- [ ] Wishlist
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Search functionality
- [ ] Product filtering (advanced)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **shadcn/ui** - Beautiful component library
- **Unsplash & Pexels** - Product images
- **Tailwind CSS** - Utility-first CSS framework
- **FastAPI** - Modern Python web framework

## 📞 Support

For questions or issues:
- Check [LOCAL_SETUP_GUIDE.md](LOCAL_SETUP_GUIDE.md)
- Check [DEPLOYMENT.md](DEPLOYMENT.md)
- Open an issue on GitHub

---

**Made with 💚 for a sustainable future**

*Wear the Change. Live Only Green.*