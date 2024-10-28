import { TMenu, TSubMenu } from "@/features/shared/types/menu";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Menu = ({ items }: { items: TMenu[] }) => {
  return (
    <View style={styles.container}>
      {items.map((menu) => (
        <MenuSection
          key={menu.id}
          title={menu.title}
          subMenus={menu.subMenus}
        />
      ))}
    </View>
  );
};

const MenuSection = ({
  title,
  subMenus,
}: {
  title: string;
  subMenus: TSubMenu[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ScrollView>
      <TouchableOpacity style={styles.menuItem} onPress={toggleOpen}>
        <Text style={styles.menuTitle}>{title}</Text>
        <Text style={styles.arrow}>{isOpen ? "▼" : "▶"}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.subMenuContainer}>
          {subMenus.map((subMenu, index) => (
            <SubMenu key={index} title={subMenu.title} items={subMenu.items} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const SubMenu = ({ title, items }: TSubMenu) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.subMenuItem}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.subMenuTitle}>{title}</Text>
        <Text style={styles.arrow}>{isOpen ? "▼" : "▶"}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.subMenu}>
          {items.map((item, index) => (
            <SubMenuItem
              key={index}
              title={item.title}
              onPress={() => router.navigate(item.routePath)}
            />
          ))}
        </View>
      )}
    </View>
  );
};
SubMenu.displayName = "SubMenu";

const SubMenuItem = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.subSubMenuItem}>
      <Text style={styles.subSubMenuText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  arrow: {
    marginLeft: 8,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 6,
    marginBottom: 6,
  },
  menuTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subMenuContainer: {
    paddingLeft: 12,
  },
  subMenuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#d0d0d0",
    borderRadius: 6,
    marginBottom: 6,
  },
  subMenuTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  subMenu: {
    paddingLeft: 20,
  },
  subSubMenuItem: {
    padding: 10,
  },
  subSubMenuText: {
    fontSize: 14,
    color: "#333",
  },
});

export default Menu;
