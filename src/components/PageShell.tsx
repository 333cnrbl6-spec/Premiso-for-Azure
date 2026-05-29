import React from 'react';
import { spacing } from '../styles/tokens';

interface PageShellProps {
  title: string;
  children: React.ReactNode;
}

const PageShell: React.FC<PageShellProps> = ({ title, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg }}>
      <h1 style={{ margin: 0, fontSize: '1.75rem' }}>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default PageShell;
