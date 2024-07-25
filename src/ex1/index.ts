export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export function isRangeAvailable(
  requestedRange: DateRange,
  availableRange: DateRange
): boolean {
  if (requestedRange.startDate >= availableRange.startDate && requestedRange.endDate <= availableRange.endDate ) {
    return true;
  } else {
    return false;
  }
}