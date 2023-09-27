import queryString from 'query-string';
import { VehicleManagerInterface, VehicleManagerGetQueryInterface } from 'interfaces/vehicle-manager';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVehicleManagers = async (
  query?: VehicleManagerGetQueryInterface,
): Promise<PaginatedInterface<VehicleManagerInterface>> => {
  return fetcher('/api/vehicle-managers', {}, query);
};

export const createVehicleManager = async (vehicleManager: VehicleManagerInterface) => {
  return fetcher('/api/vehicle-managers', { method: 'POST', body: JSON.stringify(vehicleManager) });
};

export const updateVehicleManagerById = async (id: string, vehicleManager: VehicleManagerInterface) => {
  return fetcher(`/api/vehicle-managers/${id}`, { method: 'PUT', body: JSON.stringify(vehicleManager) });
};

export const getVehicleManagerById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/vehicle-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteVehicleManagerById = async (id: string) => {
  return fetcher(`/api/vehicle-managers/${id}`, { method: 'DELETE' });
};
