import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Package,
  LayoutDashboard,
  BaggageClaim,
  Layers,
  Shapes,
  Tag,
  Factory,
  User,
  Truck,
  Percent,
  StickyNote,
  HandCoins,
  House,
  MessageCircleQuestion,
  ListCollapse,
  FilePenLine,
  ArrowRightLeft,
  Users,
  ContactRound,
  ChevronDown,
  ChevronRight,
  Store,
  SmilePlus,
  UserCheck,
  Star,
  CircleHelp,
  Gift,
  Zap,
  MessagesSquare,
  ScrollText,
  SlidersVertical,
} from "lucide-react";

const SidebarOption = ({ label, icon: Icon, expandable, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-2">
      <div
        className="flex justify-between items-center p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition"
        onClick={() => expandable && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 text-gray-300" />}
          <span className="text-gray-300 text-sm">{label}</span>
        </div>
        {expandable && (
          isExpanded ? <ChevronDown className="text-gray-400 w-4 h-4" /> : <ChevronRight className="text-gray-400 w-4 h-4" />
        )}
      </div>

      {expandable && isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="ml-6 border-l border-gray-500 pl-3"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const SideBar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-300 p-4 shadow-lg overflow-y-auto">
      <h1 className="text-xl font-semibold text-white mb-4">Morning Basket</h1>

      <SidebarOption label="MAIN" />
      <p className="flex items-center gap-2 text-gray-400 text-sm py-2"><LayoutDashboard className="w-5 h-5" /> Dashboard</p>

      <p className="text-gray-400 mt-4">Shop Management</p>
      <SidebarOption label="Shops" icon={ShoppingCart} expandable>
        <SidebarOption label="All shops" />
        <SidebarOption label="Add new shop" />
        <SidebarOption label="Inactive/New shops" />
      </SidebarOption>

      <p className="flex items-center gap-2 text-gray-400 text-sm py-2"><BaggageClaim className="w-5 h-5" /> My Shops</p>
      <p className="flex items-center gap-2 text-gray-400 text-sm py-2"><Package className="w-5 h-5"/> Product Management</p>

      <SidebarOption label="Products" icon={Package} expandable>
        <SidebarOption label="All Products" />
        <SidebarOption label="My Draft products" />
        <SidebarOption label="All Low & Out of Stock products" />
      </SidebarOption>

      <p className="flex items-center gap-2 text-gray-400 text-sm py-2"><Layers className="w-5 h-5" /> Inventory</p>
      <p className="flex items-center gap-2 text-gray-400 text-sm py-2"><Shapes className="w-5 h-5" /> Categories</p>
      <p className="flex items-center gap-2 text-gray-400 text-sm py-2"><Tag className="w-5 h-5" /> Tags</p>

      <p className="mt-4 text-gray-400">E-commerce Management</p>
      <p className="flex items-center gap-2 text-gray-400 text-sm py-2"><Percent className="w-5 h-5" /> Taxes</p>
      <p className="flex items-center gap-2 text-gray-400 text-sm py-2"><Truck className="w-5 h-5" /> Shippings</p>

      <SidebarOption label="Refunds" icon={HandCoins} expandable>
        <SidebarOption label="Reported refunds" />
        <SidebarOption label="Refund Policies" />
        <SidebarOption label="Add new refund policy" />
      </SidebarOption>

      <p className="mt-4 text-gray-400">User Control</p>
      <p className="flex items-center gap-2 text-gray-400 text-sm py-2"><Users className="w-5 h-5" /> All Users</p>

      <SidebarOption label="Vendors" icon={Store} expandable>
        <SidebarOption label="All vendors" />
        <SidebarOption label="Pending vendors" />
      </SidebarOption>

      <SidebarOption label="Staff" icon={SmilePlus} expandable>
        <SidebarOption label="My Staffs" />
        <SidebarOption label="Vendor Staffs" />
      </SidebarOption>

      <p className="flex items-center gap-2 text-gray-400 text-sm py-2"><UserCheck className="w-5 h-5" /> Customers</p>

      <SidebarOption label="Coupons" icon={Gift} expandable>
        <SidebarOption label="All coupons" />
        <SidebarOption label="Add new coupon" />
      </SidebarOption>

      <SidebarOption label="Flash Sale" icon={Zap} expandable>
        <SidebarOption label="All campaigns" />
        <SidebarOption label="Add new campaigns" />
      </SidebarOption>

      <p className="mt-4 text-gray-400">Site Management</p>

      <SidebarOption label="Settings" icon={SlidersVertical} expandable>
        <SidebarOption label="General settings" />
        <SidebarOption label="Payment settings" />
        <SidebarOption label="SEO setting" />
        <SidebarOption label="Events settings" />
      </SidebarOption>
    </aside>
  );
};

export default SideBar;
