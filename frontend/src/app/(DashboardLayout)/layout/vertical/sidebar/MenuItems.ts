import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconPoint,
  IconHome2,
  IconBuildingBank,
  IconTrain,
  IconSettings,
  IconListDetails
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: (IconHome2),
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Indikator",
  },
  {
    id: uniqueId(),
    title: "Keuangan",
    icon: IconBuildingBank,
    href: "/auth/login",
  },
  {
    id: uniqueId(),
    title: "Aset",
    icon: IconTrain,
    href: "/auth/login",
  },
  {
    navlabel: true,
    subheader: "Settings",
  },
  {
    id: uniqueId(),
    title: "Parameter",
    icon: IconListDetails,
    href: "/auth/login",
  },
  {
    id: uniqueId(),
    title: "Setting",
    icon: IconSettings,
    href: "/auth/login",
  },
];

export default Menuitems;
