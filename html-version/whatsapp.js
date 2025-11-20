// WhatsApp Integration
// ⚠️ IMPORTANT: Replace with YOUR WhatsApp number
const WHATSAPP_NUMBER = '1234567890'; // Replace with your number (with country code, no + or spaces)
// Example: For +1 555-123-4567, use: 15551234567
// Example: For +91 98765 43210, use: 919876543210

function sendWhatsAppOrder() {
    // Get customer information
    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    const deliveryAddress = document.getElementById('deliveryAddress').value.trim();

    // Validate inputs
    if (!customerName) {
        alert('Please enter your name');
        return;
    }

    if (!deliveryAddress) {
        alert('Please enter delivery address');
        return;
    }

    if (cart.items.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Build order message
    let message = `🛒 *NEW ORDER - Only Green*\n\n`;
    message += `👤 *Customer Details:*\n`;
    message += `Name: ${customerName}\n`;
    if (customerPhone) {
        message += `Phone: ${customerPhone}\n`;
    }
    message += `Address: ${deliveryAddress}\n\n`;
    
    message += `📦 *Order Items:*\n`;
    cart.items.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Qty: ${item.quantity} x $${item.price.toFixed(2)} = $${(item.quantity * item.price).toFixed(2)}\n`;
    });
    
    message += `\n💰 *Order Summary:*\n`;
    message += `Subtotal: $${cart.getTotal().toFixed(2)}\n`;
    message += `Tax (8%): $${cart.getTax().toFixed(2)}\n`;
    message += `Shipping: FREE\n`;
    message += `*Total: $${cart.getGrandTotal().toFixed(2)}*\n\n`;
    
    message += `🌱 Thank you for choosing sustainable fashion!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    alert('Opening WhatsApp... Please send the message to complete your order!');
    
    // Optional: Clear cart after sending (uncomment if you want this)
    // setTimeout(() => {
    //     cart.clearCart();
    //     window.location.href = 'index.html';
    // }, 2000);
}

// Add event listener for Enter key in input fields
if (document.getElementById('customerName')) {
    document.getElementById('customerName').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('customerPhone').focus();
        }
    });

    document.getElementById('customerPhone').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('deliveryAddress').focus();
        }
    });

    document.getElementById('deliveryAddress').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendWhatsAppOrder();
        }
    });
}