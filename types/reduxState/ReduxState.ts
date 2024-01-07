import { Product } from "../product/Product";
import { Notification } from "../notification/Notification";

export type RootState = {
  product: {
    products: Product[];
  };
  notification: {
    notifications: Notification[];
  };
};
