const mapping: Record<string, string> = {
  administrators: 'administrator',
  bookings: 'booking',
  users: 'user',
  vehicles: 'vehicle',
  'vehicle-managers': 'vehicle_manager',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
