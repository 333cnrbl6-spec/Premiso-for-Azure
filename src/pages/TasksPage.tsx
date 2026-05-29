import React from 'react';
import PageShell from '../components/PageShell';
import { colors, spacing } from '../styles/tokens';

const mockTasks = [
  { id: 't1', title: 'Boiler inspection', property: '12 Oak Street', due: 'Tomorrow' },
  { id: 't2', title: 'Prepare viewing', property: '44 Meadow View', due: 'Friday' },
  { id: 't3', title: 'Routine check', property: '7 Riverside Close', due: 'Next week' }
];

const TasksPage: React.FC = () => {
  return (
    <PageShell title="Tasks">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.md
        }}
      >
        {mockTasks.map((task) => (
          <div
            key={task.id}
            style={{
              background: colors.surface,
              padding: spacing.lg,
              borderRadius: '8px',
              border: `1px solid ${colors.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: spacing.xs
            }}
          >
            <strong>{task.title}</strong>
            <span style={{ color: colors.textMuted }}>{task.property}</span>
            <span style={{ color: colors.primary }}>{task.due}</span>
          </div>
        ))}
      </div>
    </PageShell>
  );
};

export default TasksPage;
