import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ClockStage } from './components/ClockStage';
import { SettingsPanel } from './components/SettingsPanel';
import { useClockConfig } from './hooks/useClockConfig';
import { T } from './i18n';

export default function App() {
  const {
    config, update, updateColors, updateLogo,
    encodeToUrl, pushToHash,
    slugLoading,
    currentSlug, setCurrentSlug,
  } = useClockConfig();

  const [panelOpen, setPanelOpen] = useState(false);

  if (slugLoading) {
    const t = T[config.lang ?? 'ko'];
    return (
      <div style={{
        position: 'fixed', inset: 0,
        background: config.colors.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#9a9aa8', fontSize: '1.2rem', fontFamily: 'sans-serif',
      }}>
        {t.loading}
      </div>
    );
  }

  return (
    <>
      <ClockStage
        config={config}
        panelOpen={panelOpen}
        onOpenPanel={() => setPanelOpen(true)}
      />
      <SettingsPanel
        config={config}
        open={panelOpen}
        onClose={() => setPanelOpen(false)}
        onUpdate={update}
        onUpdateColors={updateColors}
        onUpdateLogo={updateLogo}
        encodeToUrl={encodeToUrl}
        pushToHash={pushToHash}
        currentSlug={currentSlug}
        setCurrentSlug={setCurrentSlug}
      />
      <Analytics />
    </>
  );
}
