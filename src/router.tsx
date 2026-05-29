import React from 'react';
import { RouteObject } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import DashboardPage from './pages/DashboardPage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import TasksPage from './pages/TasksPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'properties', element: <PropertiesPage /> },
      { path: 'properties/:id', element: <PropertyDetailPage /> },
      { path: 'tasks', element: <TasksPage /> }
    ]
  }
];
