export const menuItems = [
  { icon: "/icons/home.svg", label: "Home", id: "home" },
  { icon: "/icons/people.svg", label: "My Info", id: "myinfo" },
  { icon: "/icons/peoples.svg", label: "People", id: "people" },
  { icon: "/icons/clock.svg", label: "Timesheet", id: "timesheet" },
  { icon: "/icons/payroll.svg", label: "Payroll", id: "payroll" },
  { icon: "/icons/people.svg", label: "Clients", id: "clients" },
  { icon: "/icons/project.svg", label: "Project", id: "project" },
  {
    icon: "/icons/settings.svg",
    label: "Settings",
    id: "settings",
    footer: true,
  },
];

export const headerActions = [
  { icon: "/icons/notification.svg", onClick: () => console.log("Settings") },
];

export const getToolbarActions = (viewMode, setViewMode) => [
  {
    id: "download",
    icon: "/icons/download.svg",
    onClick: () => console.log("Download"),
  },
  {
    id: "filter",
    icon: "/icons/filter.svg",
    onClick: () => console.log("Filter"),
  },
  {
    id: "plus",
    icon: "/icons/plus.svg",
    variant: "primary",
    onClick: () => console.log("Add"),
  },
  {
    id: "grid",
    icon: "/icons/grid.svg",
    onClick: () => setViewMode("grid"),
    active: viewMode === "grid",
  },
  {
    id: "list",
    icon: "/icons/list.svg",
    onClick: () => setViewMode("list"),
    active: viewMode === "list",
  },
  {
    id: "network",
    icon: "/icons/network.svg",
    onClick: () => console.log("Network"),
  },
];
