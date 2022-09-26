function CartItem({ cartItem, removeFromCart }) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{cartItem.title}</div>
        <div class="fw-bold">
          {cartItem.currency} - {cartItem.price}
        </div>
      </div>
      <button
        onClick={() => removeFromCart(cartItem)}
        class="badge bg-primary rounded-pill"
      >
        X
      </button>
    </li>
  );
}

export default CartItem;
