import { useLocation } from "react-router-dom";

interface CheckoutState {
  productId: number;
  quantity: number;
}

export const Checkout = () => {
  const location = useLocation();
  const state = location.state as CheckoutState | null;
  return (
    <div>
      <h1>Checkout</h1>
      <p>Product ID: {state?.productId}</p>
      <p>Quantity: {state?.quantity}</p>
    </div>
  );
};
