/**
 * Service Type Utilities
 *
 * Helper functions to handle differences between commercial and residential roofing services.
 */

import { businessConfig } from '@/config/business';
import { commercialServices, residentialServices, commercialServicesDetailed, residentialServicesDetailed } from '@/config/content';

/**
 * Check if the business is commercial roofing
 */
export const isCommercial = () => businessConfig.serviceType === 'commercial';

/**
 * Check if the business is residential roofing
 */
export const isResidential = () => businessConfig.serviceType === 'residential';

/**
 * Get the service type text for display
 */
export const getServiceTypeText = () => {
  return isCommercial() ? 'Commercial' : 'Residential';
};

/**
 * Get the appropriate service type description
 */
export const getServiceTypeDescription = () => {
  return isCommercial()
    ? 'Professional commercial roofing solutions for businesses'
    : 'Expert residential roofing services for homeowners';
};

/**
 * Get the appropriate services array based on service type
 */
export const getServices = () => {
  return isCommercial() ? commercialServices : residentialServices;
};

/**
 * Get building type text (for descriptions)
 */
export const getBuildingType = () => {
  return isCommercial() ? 'commercial buildings' : 'homes';
};

/**
 * Get client type text
 */
export const getClientType = () => {
  return isCommercial() ? 'businesses' : 'homeowners';
};

/**
 * Get the detailed services array for Services page based on service type
 */
export const getServicesDetailed = () => {
  return isCommercial() ? commercialServicesDetailed : residentialServicesDetailed;
};
