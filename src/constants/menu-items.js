import { Home, User, Clock, DollarSign, Users, FileText, Settings, Download, Filter, Plus, Grid, List, Network } from 'lucide-react';

 export const menuItems = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: User, label: 'My Info', id: 'myinfo' },
    { icon: Users, label: 'People', id: 'people' },
    { icon: Clock, label: 'Timesheet', id: 'timesheet' },
    { icon: DollarSign, label: 'Payroll', id: 'payroll' },
    { icon: Users, label: 'Clients', id: 'clients' },
    { icon: FileText, label: 'Project', id: 'project' },
    { icon: Settings, label: 'Settings', id: 'settings', footer: true },
  ];
 export const headerActions = [
    { icon: Grid, onClick: () => console.log('Grid view') },
    { icon: Settings, onClick: () => console.log('Settings') }
  ];
