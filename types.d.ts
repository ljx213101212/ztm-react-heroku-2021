interface MenuItemProps {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  linkUrl: string;
}

interface DirectoryProps {
  sections: MenuItemProps[];
}

interface CollectionItemsProps {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface CollectionPreviewProps {
  id?: number;
  title: string;
  items: CollectionItemsProps[];
}

interface ShopDataItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface ShopData {
  id: number;
  title: string;
  routeName: string;
  items: ShopDataItem[];
}

interface ShopPageStates {
  collections: any;
}

interface SignInStates {
  email: string;
  password: string;
}

interface User {
  id: number;
  username: string;
  email: string;
}

interface UserReducerType {
  id: string | null;
  currentUser: DocumentData | null;
}

interface HeaderProps {
  currentUser: number;
  hidden: boolean;
}

interface HeaderDesieredProps {
  currentUser: ParametricSelector<UserReducerType, HeaderProps, number>;
  hidden: ParametricSelector<UserReducerType, HeaderProps, boolean>;
}

interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface CartReducerType {
  hidden: boolean;
  cartItems: CartItem[];
}