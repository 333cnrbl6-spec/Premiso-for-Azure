import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colors, spacing } from '../styles/tokens';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Properties', path: '/properties' },
  { label: 'Tasks', path: '/tasks' }
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div
      style={{
        height: '100%',
        background: colors.surface,
        borderRight: `1px solid ${colors.border}`,
        padding: spacing.lg,
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.md
      }}
    >
      <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Premiso</h2>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
        {navItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                padding: `${spacing.sm} ${spacing.md}`,
                borderRadius: '6px',
                background: active ? colors.primarySoft : 'transparent',
                color: active ? colors.primary : colors.text,
                fontWeight: active ? 600 : 400
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
