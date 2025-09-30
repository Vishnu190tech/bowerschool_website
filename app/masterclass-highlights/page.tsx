import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MasterclassHighlights from '@/components/MasterclassHighlights'

export default function MasterclassHighlightsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MasterclassHighlights />
      <Footer />
    </div>
  )
}