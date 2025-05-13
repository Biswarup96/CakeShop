import React from "react";
import {
  Container,
  Typography,
  Grid2,
  Button,
  TextField,
  Box,
  Paper,
  IconButton,
  keyframes
} from "@mui/material";
import cartpng from "../../Assets/pngwing.com.png"
import { pink, purple, red } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { applyTempUpdate, removeFromCart, updateTempQuantity } from "../../Redux/CartSlice";

// Keyframe animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const slideUp = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Cart = () => {
  const { item: cartItems, tempItem, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => dispatch(removeFromCart(id));
  const handleUpdateQuantity = (id, quantity) => dispatch(updateTempQuantity({ id, quantity }));
  const handleApplyUpdate = (id) => dispatch(applyTempUpdate(id));

  return (
    <Container maxWidth="md" sx={{ 
      py: 4, 
      animation: `${slideUp} 0.6s ease-out`,
      background: 'linear-gradient(45deg, #fff5f5 0%, #f8f0fb 100%)'
    }}>
      {/* Animated Header */}
      <Box sx={{ 
        mb: 4, 
        textAlign: "center",
        animation: `${float} 3s ease-in-out infinite`
      }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            background: `linear-gradient(45deg, ${pink[500]} 0%, ${purple[500]} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 10px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            py: 2,
            borderRadius: 2
          }}
        >
          <ShoppingBagIcon sx={{ fontSize: '2.5rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} />
          Your Shopping Cart
        </Typography>
      </Box>

      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <Paper
            key={item.id}
            elevation={4}
            sx={{
              mb: 3,
              p: 3,
              background: 'rgba(255,255,255,0.9)',
              borderRadius: '16px',
              animation: `${slideUp} 0.6s ease-out ${index * 0.1}s`,
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: `0 12px 24px ${pink[100]}`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }
            }}
          >
            <Grid2 container spacing={2} alignItems="center">
              {/* Product Image */}
              <Grid2 item xs={12} md={3}>
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                    borderRadius: 3,
                    boxShadow: `0 8px 16px ${purple[100]}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05) rotate(-2deg)',
                      boxShadow: `0 12px 24px ${purple[200]}`
                    }
                  }}
                />
              </Grid2>

              {/* Product Info */}
              <Grid2 item xs={12} md={5}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  color: purple[800],
                  fontSize: '1.4rem',
                  mb: 1
                }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: 'text.secondary',
                  fontStyle: 'italic',
                  mb: 1
                }}>
                  {item.description}
                </Typography>
                <Typography variant="subtitle2" sx={{ 
                  color: pink[500],
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <Box component="span" sx={{ 
                    width: 10, 
                    height: 10, 
                    bgcolor: item.isVegetarian ? pink[500] : red[500],
                    borderRadius: '50%'
                  }} />
                  {item.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                </Typography>
              </Grid2>

              {/* Quantity Controls */}
              <Grid2 item xs={12} md={4}>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  alignItems: 'center',
                  position: 'relative'
                }}>
                  <TextField
                    type="number"
                    size="small"
                    value={tempItem.find(t => t.id === item.id)?.quantity || item.quantity}
                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                    slotProps={{ min: 1 }}
                    sx={{
                      width: 100,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        '& fieldset': { 
                          borderColor: pink[200],
                          transition: 'all 0.3s ease'
                        },
                        '&:hover fieldset': { borderColor: pink[400] },
                        '&.Mui-focused fieldset': { 
                          borderColor: pink[500],
                          boxShadow: `0 0 0 2px ${pink[100]}`
                        }
                      }
                    }}
                  />
                  <Typography variant="h6" sx={{ 
                    color: purple[700],
                    fontWeight: 700,
                    minWidth: 100,
                    textAlign: 'center',
                    background: `linear-gradient(45deg, ${pink[100]}, ${purple[100]})`,
                    p: 1,
                    borderRadius: 2
                  }}>
                    ₹{item.price * item.quantity}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      onClick={() => handleApplyUpdate(item.id)}
                      sx={{
                        color: pink[500],
                        background: pink[50],
                        '&:hover': {
                          background: pink[100],
                          transform: 'rotate(360deg)',
                          transition: 'all 0.6s ease'
                        }
                      }}
                    >
                      <UpgradeIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleRemoveItem(item.id)}
                      sx={{
                        color: red[500],
                        background: red[50],
                        '&:hover': {
                          background: red[100],
                          transform: 'scale(1.2)',
                          transition: 'all 0.3s ease'
                        }
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </Paper>
        ))
      ) : (
        <Box sx={{ 
          textAlign: 'center', 
          mt: 4,
          animation: `${slideUp} 0.6s ease-out`
        }}>
          <Box
            component="img"
            src={cartpng}
            alt="Empty cart"
            sx={{ 
              width: 300, 
              mb: 3,
              animation: `${float} 3s ease-in-out infinite`
            }}
          />
          <Typography variant="h4" sx={{ 
            color: purple[500],
            fontWeight: 700,
            mb: 2
          }}>
            Your Cart Feels Lonely!
          </Typography>
          <Button
            onClick={() => navigate('/product')}
            variant="contained"
            startIcon={<ShoppingBagIcon />}
            sx={{
              background: `linear-gradient(45deg, ${pink[500]} 0%, ${purple[500]} 100%)`,
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: `0 8px 16px ${pink[200]}`,
                transition: 'all 0.3s ease'
              }
            }}
          >
            Start Shopping
          </Button>
        </Box>
      )}

      {/* Total Price Section */}
      {cartItems.length > 0 && (
        <Paper
          elevation={3}
          sx={{
            p: 3,
            mb: 3,
            background: `linear-gradient(45deg, ${purple[50]}, ${pink[50]})`,
            borderRadius: '16px',
            animation: `${pulse} 2s ease-in-out infinite`,
            position: 'sticky',
            bottom: 20,
            backdropFilter: 'blur(8px)'
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center'
          }}>
            <Typography variant="h4" sx={{ 
              fontWeight: 900,
              background: `linear-gradient(45deg, ${pink[500]} 0%, ${purple[500]} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Total Amount
            </Typography>
            <Typography variant="h3" sx={{ 
              fontWeight: 900,
              color: pink[700],
              textShadow: `0 2px 4px ${pink[100]}`
            }}>
              ₹{totalPrice}
            </Typography>
          </Box>
        </Paper>
      )}

      {/* Action Buttons */}
      {cartItems.length > 0 && (
        <Box sx={{ 
          display: 'flex', 
          gap: 3, 
          justifyContent: 'center',
          mt: 4
        }}>
          <Button
            onClick={() => navigate('/product')}
            variant="outlined"
            startIcon={<ArrowBackIcon sx={{ transition: 'transform 0.3s ease' }} />}
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: '12px',
              borderWidth: 2,
              borderColor: pink[500],
              color: pink[500],
              fontWeight: 700,
              '&:hover': {
                background: pink[50],
                borderWidth: 2,
                transform: 'translateX(-10px)',
                '& .MuiButton-startIcon': {
                  transform: 'rotate(360deg)'
                }
              }
            }}
          >
            Continue Shopping
          </Button>
          <Button
            variant="contained"
            endIcon={<span style={{ fontSize: '1.5rem' }}>→</span>}
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: '12px',
              background: `linear-gradient(45deg, ${pink[500]} 0%, ${purple[500]} 100%)`,
              fontWeight: 700,
              '&:hover': {
                transform: 'translateX(10px)',
                boxShadow: `0 8px 24px ${pink[200]}`,
                '& .MuiButton-endIcon': {
                  transform: 'translateX(5px)'
                }
              }
            }}
          >
            Secure Checkout
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Cart;