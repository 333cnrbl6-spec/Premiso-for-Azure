import React from 'react';
import PageShell from '../components/PageShell';
import { colors, spacing } from '../styles/tokens';
import { Link } from 'react-router-dom';

const mockProperties = [
  { id: '1', name: '12 Oak Street', status: 'Occupied' },
  { id: '2', name: '44 Meadow View', status: 'Vacant' },
  { id: '3', name: '7 Riverside Close', status: 'Occupied' }
];

const PropertiesPage: React.FC = () => {
  return (
    <PageShell title="Properties">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: spacing.lg
        }}
      >
        {mockProperties.map((p) => (
          <Link
            key={p.id}
            to={`/properties/${p.id}`}
            style={{
              background: colors.surface,
              padding: spacing.lg,
              borderRadius: '8px',
              border: `1px solid ${colors.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: spacing.sm
            }}
          >
            <strong>{p.name}</strong>
            <span style={{ color: colors.textMuted }}>{p.status}</span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
};

export default PropertiesPage;
