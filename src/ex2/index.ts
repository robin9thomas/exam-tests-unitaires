export type Order = {
  id: string;
  isSubmitted: boolean;
};

export function submitOrder(order: Order): Order {
  // ne pas oublier d'appeler la fonction `sendOrderEmail` (`src/ex2/lib/email.ts`)
  return order;
}
