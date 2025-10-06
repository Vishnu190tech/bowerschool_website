'use client'

import React, { useState } from 'react'
import SkillsProSection from '@/components/SkillsProSection'

type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug'

export default function SkillsDemoPage() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('seed')

  const themes: ThemeType[] = ['scholarship', 'lead', 'seed', 'ug']

  const themeColors: Record<ThemeType, string> = {
    scholarship: '#3232e6',
    lead: '#A8F326',
    seed: '#FF8829',
    ug: '#4242FF',
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Theme Switcher */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <span className="text-white font-semibold mr-2">Select Theme:</span>
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => setCurrentTheme(theme)}
                className="px-4 py-2 rounded-lg font-medium transition-all capitalize"
                style={{
                  backgroundColor: currentTheme === theme ? themeColors[theme] : 'transparent',
                  color: currentTheme === theme ? '#000' : themeColors[theme],
                  border: `2px solid ${themeColors[theme]}`,
                }}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Component Demo */}
      <SkillsProSection theme={currentTheme} />

      {/* Feature Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-black">
        <div className="bg-[#161616] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            SkillsProSection - Theme Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                ✅ Theme-Dependent Elements
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Dark background color (theme-specific)</li>
                <li>• Background gradient</li>
                <li>• Radial gradient (bottom glow)</li>
                <li>• Overlay gradient (vertical fade)</li>
                <li>• Highlighted word color</li>
                <li>• Card border gradients (theme-tinted)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                ✅ Customizable Props
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <code className="text-orange-400">theme</code> - Color variant (4 options)</li>
                <li>• <code className="text-orange-400">mainTitle</code> - Main heading text</li>
                <li>• <code className="text-orange-400">highlightWord</code> - Colored word</li>
                <li>• <code className="text-orange-400">description</code> - Description text</li>
                <li>• <code className="text-orange-400">skills</code> - Array of skill cards</li>
                <li>• <code className="text-orange-400">toolsTitle</code> - Tools section title</li>
                <li>• <code className="text-orange-400">toolsCount</code> - Number of tools (default: 6)</li>
              </ul>
            </div>
          </div>

          <div className="bg-black/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Usage Example:</h3>
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`<SkillsProSection
  theme="${currentTheme}"
  mainTitle="Skills That Make You"
  highlightWord="A Pro"
  description="Enhance your entrepreneurial skillset..."
  skills={[
    {
      icon: "/icon.svg",
      title: "Strategic Thinking",
      description: "Learn to define your market..."
    },
    // ... more skills
  ]}
  toolsTitle="Tools you will master"
  toolsCount={6}
/>`}
            </pre>
          </div>

          <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              🎨 Background System
            </h3>
            <p className="text-gray-300 text-sm">
              Each theme features a complete 3-layer background system:
              <br />
              <strong>Layer 1:</strong> Theme-specific dark base color
              <br />
              <strong>Layer 2:</strong> Diagonal gradient
              <br />
              <strong>Layer 3:</strong> Radial gradient from bottom center
              <br />
              <strong>Layer 4:</strong> Overlay gradient for depth
              <br />
              <strong>Card Gradients:</strong> Theme-tinted border gradients on all skill cards
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
