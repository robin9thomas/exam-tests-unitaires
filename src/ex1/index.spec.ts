import { isRangeAvailable, DateRange } from './index';

describe('isRangeAvailable', () => {
  it('doit retourner true quand la plage demandé est comprise dans la plage disponible', () => {
    const requestedRange: DateRange = {
      startDate: new Date('2024-08-18'),
      endDate: new Date('2024-08-23')
    };
    const availableRange: DateRange = {
      startDate: new Date('2024-08-17'),
      endDate: new Date('2024-08-24')
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
  });

  it('doit retourner false quand la date de début demandée est avant la plage disponible', () => {
    const requestedRange: DateRange = {
      startDate: new Date('2024-08-16'),
      endDate: new Date('2024-08-24')
    };
    const availableRange: DateRange = {
      startDate: new Date('2024-08-17'),
      endDate: new Date('2024-08-24')
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it('doit retourner false quand la date de fin demandée est après la plage disponible', () => {
    const requestedRange: DateRange = {
      startDate: new Date('2024-08-18'),
      endDate: new Date('2024-08-25')
    };
    const availableRange: DateRange = {
      startDate: new Date('2024-08-17'),
      endDate: new Date('2024-08-24')
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it('doit retourner false quand la plage demandée est hors de la plage disponible', () => {
    const requestedRange: DateRange = {
      startDate: new Date('2024-08-09'),
      endDate: new Date('2024-08-16')
    };
    const availableRange: DateRange = {
      startDate: new Date('2024-08-17'),
      endDate: new Date('2024-08-24')
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it('doit retourner true quand la plage demandé est exactement la même que la plage disponible', () => {
    const requestedRange: DateRange = {
      startDate: new Date('2024-08-17'),
      endDate: new Date('2024-08-24')
    };
    const availableRange: DateRange = {
      startDate: new Date('2024-08-17'),
      endDate: new Date('2024-08-24')
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
  });
});