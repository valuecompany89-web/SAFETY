import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Background } from './components/Background';
import { IntroScreen } from './components/IntroScreen';
import { FormStep } from './components/FormStep';
import { FinalScreen } from './components/FinalScreen';

const WHATSAPP_LINK = "https://chat.whatsapp.com/JJsACdqzH586JFUbYOHAmF?mode=gi_t";

type Screen = 'intro' | 'name' | 'sector' | 'role' | 'experience' | 'whatsapp' | 'expectation' | 'final';

export default function App() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [formData, setFormData] = useState({
    name: '',
    sector: '',
    role: '',
    experience: '',
    whatsapp: '',
    expectation: ''
  });

  const [isSaving, setIsSaving] = useState(false);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFinish = async () => {
    setIsSaving(true);
    
    // Industrial delay for processing feedback
    setTimeout(() => {
      setIsSaving(false);
      setScreen('final');
    }, 400);
  };

  return (
    <div className="relative min-h-screen">
      <Background />
      
      <AnimatePresence mode="wait">
        {screen === 'intro' && (
          <IntroScreen key="intro" onStart={() => setScreen('name')} />
        )}

        {screen === 'name' && (
          <FormStep
            key="name"
            step={1}
            totalSteps={6}
            question="Full Name"
            description="Enter your official name as it should appear on records."
            placeholder="Official identity"
            value={formData.name}
            onChange={(val) => updateField('name', val)}
            onNext={() => setScreen('sector')}
          />
        )}

        {screen === 'sector' && (
          <FormStep
            key="sector"
            step={2}
            totalSteps={6}
            question="Work Sector"
            description="Select the field that best describes your operations."
            placeholder="Select field"
            options={['Oil & Gas', 'Construction', 'Manufacturing', 'Safety Compliance', 'Engineering Services']}
            value={formData.sector}
            onChange={(val) => updateField('sector', val)}
            onNext={() => setScreen('role')}
          />
        )}

        {screen === 'role' && (
          <FormStep
            key="role"
            step={3}
            totalSteps={6}
            question="Your Role"
            description="Specify your current position or rank."
            placeholder="e.g. Site Engineer, HSE Officer"
            value={formData.role}
            onChange={(val) => updateField('role', val)}
            onNext={() => setScreen('experience')}
          />
        )}

        {screen === 'experience' && (
          <FormStep
            key="experience"
            step={4}
            totalSteps={6}
            question="Experience Level"
            description="Total years of professional practice."
            placeholder="Select level"
            options={['0–2 years', '3–5 years', '6–10 years', '10+ years']}
            value={formData.experience}
            onChange={(val) => updateField('experience', val)}
            onNext={() => setScreen('whatsapp')}
          />
        )}

        {screen === 'whatsapp' && (
          <FormStep
            key="whatsapp"
            step={5}
            totalSteps={6}
            question="WhatsApp Contact"
            description="System contact for session updates."
            placeholder="+234..."
            type="tel"
            value={formData.whatsapp}
            onChange={(val) => updateField('whatsapp', val)}
            onNext={() => setScreen('expectation')}
          />
        )}

        {screen === 'expectation' && (
          <FormStep
            key="expectation"
            step={6}
            totalSteps={6}
            question="Core Expectations"
            description="What do you want to gain from this session?"
            placeholder="Professional outcomes..."
            type="textarea"
            value={formData.expectation}
            onChange={(val) => updateField('expectation', val)}
            onNext={handleFinish}
            isLoading={isSaving}
          />
        )}

        {screen === 'final' && (
          <FinalScreen
            key="final"
            name={formData.name}
            role={formData.role}
            whatsappLink={WHATSAPP_LINK}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
