import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
        <p className="text-sm capitalize italic text-slate-500">
          {isLoadingIngredients ? "loading" : ingredients.join(", ")}
        </p>
      </div>
    </li>
  );
}

export default OrderItem;
