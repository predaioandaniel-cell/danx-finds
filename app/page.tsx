import { Authenticity } from '@/components/authenticity'
import { BrandPills } from '@/components/brand-pills'
import { CartDrawer } from '@/components/cart-drawer'
import { CartProvider } from '@/components/cart-context'
import { CommunityFeed } from '@/components/community-feed'
import { ConsignmentBanner } from '@/components/consignment-banner'
import { Hero } from '@/components/hero'
import { ProductGrid } from '@/components/product-grid'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-zinc-950">
        <SiteHeader />
        <main>
          <Hero />
          <BrandPills />
          <ProductGrid />
          <Authenticity />
          <ConsignmentBanner />
          <CommunityFeed />
        </main>
        <SiteFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
