import { submitOrder, Order } from './index';
import { sendOrderEmail } from './lib/email';


// Mock de la fonction sendOrderEmail()
jest.mock('./lib/email', () => ({
  sendOrderEmail: jest.fn(),
}));

describe('submitOrder', () => {
  it('doit passer isSubmitted a true et appeller sendOrderEmail', () => {
    const order: Order = {
      id: '1',
      isSubmitted: false,
    };

    const result = submitOrder(order);

    expect(result.isSubmitted).toBe(true);
    expect(sendOrderEmail).toHaveBeenCalledWith('1');
  });

  it('doit renvoyer une erreure si isSubmitted est déja égal à true', () => {
    const order: Order = {
      id: '2',
      isSubmitted: true,
    };

    expect(() => submitOrder(order)).toThrow('La commande à dèja été passée.');
  });
});