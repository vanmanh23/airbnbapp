import { BarChart3, Contact, Gauge, Grid2X2, Heart, Inbox, Layers, List, LogOut, Receipt, Settings, Users2 } from "lucide-react";


export const features = [
    {
      name: "Dashboard",
      href: "dashboard",
      icon: Gauge,
    },
    {
      name: "Products",
      href: "products",
      icon: Grid2X2,
    },
    {
      name: "Favorites",
      href: "favorites",
      icon: Heart,
    },
    {
      name: "Inbox",
      href: "inbox",
      icon: Inbox,
    },
    {
      name: "Order Lists",
      href: "#",
      icon: List,
    },
    {
      name: "Product Stock",
      href: "productstock",
      icon: Layers,
    },
    {
      name: "Contact",
      href: "contact",
      icon: Contact,
    },
    {
      name: "Invoice",
      href: "invoice",
      icon: Receipt,
    },
    {
      name: "Chart",
      href: "chart",
      icon: BarChart3,
    },
    {
      name: "Team",
      href: "team",
      icon: Users2,
    },
    {
      name: "Settings",
      href: "settings",
      icon: Settings,
    },
    {
      name: "Logout",
      href: "logout",
      icon: LogOut,
    }
  ]