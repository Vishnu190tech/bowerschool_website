'use client'

import React, { useState } from 'react'
import ProfileCard from '@/components/ProfileCard'

type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug'

export default function ProfileDemoPage() {
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

      {/* Profile Card Demo */}
      <ProfileCard theme={currentTheme} />

      {/* Feature Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-[#161616] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            ProfileCard Component - Theme Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                ✅ Theme-Dependent Elements
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Header title color</li>
                <li>• Corner border gradients</li>
                <li>• Hard skills badges (background, border, hover)</li>
                <li>• Soft skills badges (background, border, hover)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                ✅ Customizable Props
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <code className="text-orange-400">theme</code> - Color variant</li>
                <li>• <code className="text-orange-400">profileData</code> - Student info</li>
                <li>• <code className="text-orange-400">headerTitle</code> - Custom title</li>
              </ul>
            </div>
          </div>

          <div className="bg-black/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Usage Example:</h3>
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`<ProfileCard
  theme="${currentTheme}"
  headerTitle="You After Bower's Camp"
  profileData={{
    name: 'Aadithya Iyer',
    title: 'Young Entrepreneur',
    school: 'Bower School of Entrepreneurship',
    education: 'Grade 3',
    // ... more data
  }}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
