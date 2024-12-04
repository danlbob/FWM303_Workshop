/**
 * Returns the full asset path with the base path prefix in development
 * @param path - The asset path starting with a forward slash
 * @returns The complete path including base path in development
 */
export const getAssetPath = (path: string): string => {
    // Ensure path starts with a forward slash
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const isDev = process.env.NODE_ENV === 'development';
    const basePath = isDev ? '/RetailStore' : '';
    return `${basePath}${normalizedPath}`;
  };
  
  /**
   * Configuration object containing common asset paths
   */
  export const ASSET_PATHS = {
    images: {
      amplifyLogo: '/images/amplify-logo.png',
      poweredByAws: '/images/powered-by-aws.png',
      productImagePlaceholder: '/images/product_image_coming_soon.png',
    },
    // Add other asset type categories as needed
  } as const;
  
  /**
   * Type for the supported asset paths
   */
  export type AssetPath = typeof ASSET_PATHS.images[keyof typeof ASSET_PATHS.images];
  
  /**
   * Helper function to get a typed image path
   * @param imagePath - The image path from ASSET_PATHS.images
   * @returns The complete image path including base path in development
   */
  export const getImagePath = (imagePath: keyof typeof ASSET_PATHS.images): string => {
    return getAssetPath(ASSET_PATHS.images[imagePath]);
  };