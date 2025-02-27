import { Stack } from '@twilio-paste/stack';
import { MenuItemContainer } from '../containers/MenuItemContainer';

export const MenuItems = ({
  items,
  removeItem,
  updateItemPrice,
  updateItemQuantity
}) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        <MenuItemContainer {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};
