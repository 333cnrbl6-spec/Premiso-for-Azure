import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { colors, spacing } from '../styles/tokens';

const AppLayout: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '260px 1fr',
        gridTemplateRows: '64px 1fr',
        gridTemplateAreas: `
          "sidebar topbar"
          "sidebar main"
        `,
        height: '100vh',
        background: colors.background
      }}
    >
      <aside style={{ gridArea: 'sidebar' }}>
        <Sidebar />
      </aside>

      <header style={{ gridArea: 'topbar' }}>
        <TopBar />
      </header>

      <main
        style={{
          gridArea: 'main',
          padding: spacing.lg,
          overflow: 'auto'
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
