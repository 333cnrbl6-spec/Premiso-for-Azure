import React from 'react';
import PageShell from '../components/PageShell';
import { colors, spacing } from '../styles/tokens';

const DashboardPage: React.FC = () => {
  return (
    <PageShell title="Dashboard">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: spacing.lg
        }}
      >
        <div
          style={{
            background: colors.surface,
            padding: spacing.lg,
            borderRadius: '8px',
            border: `1px solid ${colors.border}`
          }}
        >
          <h3 style={{ marginTop: 0 }}>Properties</h3>
          <p style={{ margin: 0, color: colors.textMuted }}>Overview of your managed units</p>
        </div>

        <div
          style={{
            background: colors.surface,
            padding: spacing.lg,
            borderRadius: '8px',
            border: `1px solid ${colors.border}`
          }}
        >
          <h3 style={{ marginTop: 0 }}>Tasks</h3>
          <p style={{ margin: 0, color: colors.textMuted }}>Upcoming and overdue tasks</p>
        </div>

        <div
          style={{
            background: colors.surface,
            padding: spacing.lg,
            borderRadius: '8px',
            border: `1px solid ${colors.border}`
          }}
        >
          <h3 style={{ marginTop: 0 }}>Activity</h3>
          <p style={{ margin: 0, color: colors.textMuted }}>Recent updates across your portfolio</p>
        </div>
      </div>
    </PageShell>
  );
