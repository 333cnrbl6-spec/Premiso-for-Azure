import React from 'react';
import { useParams } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { colors, spacing } from '../styles/tokens';

const mockProperties = {
  '1': { name: '12 Oak Street', status: 'Occupied', notes: 'Tenant reported boiler issue.' },
  '2': { name: '44 Meadow View', status: 'Vacant', notes: 'Ready for viewing.' },
  '3': { name: '7 Riverside Close', status: 'Occupied', notes: 'Routine inspection due next month.' }
};

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams();
  const property = mockProperties[id as keyof typeof mockProperties];

  if (!property) {
    return (
      <PageShell title="Property Not Found">
        <p style={{ color: colors.textMuted }}>No property exists with ID: {id}</p>
      </PageShell>
    );
  }

  return (
    <PageShell title={property.name}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
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
          <h3 style={{ marginTop: 0 }}>Status</h3>
          <p style={{ margin: 0, color: colors.textMuted }}>{property.status}</p>
        </div>

        <div
          style={{
            background: colors.surface,
            padding: spacing.lg,
            borderRadius: '8px',
            border: `1px solid ${colors.border}`
          }}
        >
          <h3 style={{ marginTop: 0 }}>Notes</h3>
          <p style={{ margin: 0, color: colors.textMuted }}>
