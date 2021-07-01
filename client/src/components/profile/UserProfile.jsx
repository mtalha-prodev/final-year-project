import "./userProfile.css";
import ProfileItem from "./ProfileItem";

import {
  FaShoppingBag,
  FaKey,
  FaLocationArrow,
  FaSellcast,
} from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="container-xl user__profile">
      <ProfileItem
        Icon={<FaShoppingBag />}
        Title="your orders"
        Text="Track, return and buy again"
        Path="/your_orders"
      />
      <ProfileItem
        Icon={<FaKey />}
        Text="change your password"
        Title="Change password"
        Path="/change_password"
      />
      <ProfileItem
        Icon={<FaLocationArrow />}
        Title="your address "
        Text="edit addressess for orders"
        Path="/your_address"
      />
      <ProfileItem
        Icon={<FaSellcast />}
        Title="Seller Account"
        Text="sell your products"
        Path="/your_seller"
      />
    </div>
  );
};

export default UserProfile;
