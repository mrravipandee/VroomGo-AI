export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number | string;
  createdAt?: Date;
  updatedAt?: Date;
  [key: string]: any; // For any additional properties
}

// Define serialized car return type
interface SerializedCar extends Omit<Car, 'price' | 'createdAt' | 'updatedAt'> {
  price: number;
  createdAt?: string;
  updatedAt?: string;
  wishlisted: boolean;
}

// Helper function to serialize car data
export const serializeCarData = (car: Car, wishlisted: boolean = false): SerializedCar => {
  return {
    ...car,
    price: car.price ? parseFloat(car.price.toString()) : 0,
    createdAt: car.createdAt?.toISOString(),
    updatedAt: car.updatedAt?.toISOString(),
    wishlisted,
  };
};
