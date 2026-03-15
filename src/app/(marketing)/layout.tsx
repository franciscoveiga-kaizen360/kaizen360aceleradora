import { Navbar } from '@/components/organisms/Navbar/Navbar'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
