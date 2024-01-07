
export function getHeaderTitle(route:string) {

  switch (route) {
    case 'home':
      return 'Home';
    case 'profile':
      return 'Profile';
    case 'cart':
      return 'Cart';
    case 'search':
      return 'Search';
    case 'wishlist':
      return 'Wishlist';
    case 'all':
      return 'All';
    case 'orders':
      return 'Orders';
    case 'promotions':
      return 'Promotions';
    case 'info':
      return 'Info';
    default : 
      return 'Home';
  }
}