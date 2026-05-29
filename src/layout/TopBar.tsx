import React from 'react';
import { colors, spacing } from '../styles/tokens';

const TopBar: React.FC = () => {
  return (
    <div
      style={{
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: `0 ${spacing.lg}`,
        background: colors.surfaceAlt,
        borderBottom: `1px solid ${colors.border}`
      }}
    >
      <span style={{ color: colors.textMuted, fontSize: '0.9rem' }}>
        Premiso — Local Property Ops
      </span>
    </div>
  );
};

export default TopBar;
