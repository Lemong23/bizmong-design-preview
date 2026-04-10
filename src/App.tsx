import { useState } from 'react';
import { Button } from './components/button';
import { Badge } from './components/badge';
import { Input } from './components/input';
import {
  Search,
  ChevronRight,
  Star,
  Heart,
  Bell,
  Settings,
  Plus,
  Check,
  X,
  ArrowRight,
} from 'lucide-react';

/* ── Section wrapper ── */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-heading-1 font-semibold text-cool-gray-90 mb-4 pb-2 border-b border-cool-gray-15">
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ── Color swatch ── */
function Swatch({ name, shades }: { name: string; shades: number[] }) {
  return (
    <div className="mb-4">
      <p className="text-label-2 text-cool-gray-55 mb-1.5 font-medium">
        {name}
      </p>
      <div className="flex gap-1 flex-wrap">
        {shades.map((s) => (
          <div key={s} className="flex flex-col items-center gap-0.5">
            <div
              className={`w-10 h-10 rounded-lg bg-${name}-${s} shadow-normal`}
            />
            <span className="text-caption-2 text-cool-gray-45">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const NAV_ITEMS = ['Colors', 'Typography', 'Buttons', 'Inputs', 'Badges', 'Shadows', 'Gradients'] as const;
type NavItem = (typeof NAV_ITEMS)[number];

export default function App() {
  const [active, setActive] = useState<NavItem>('Colors');

  return (
    <div className="min-h-dvh bg-page-bg">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-[20px] border-b border-cool-gray-15">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <h1 className="text-heading-2 font-bold text-gradient-1">
            Bizmong Design Preview
          </h1>
          <span className="text-caption-1 text-cool-gray-45">
            Tailwind v4 + Design System
          </span>
        </div>
        <nav className="max-w-5xl mx-auto px-6 flex gap-1 pb-2 overflow-x-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-3 py-1.5 rounded-lg text-label-1 font-medium transition-colors cursor-pointer ${
                active === item
                  ? 'bg-bizmong-blue-50 text-white'
                  : 'text-cool-gray-55 hover:bg-cool-gray-10'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {active === 'Colors' && <ColorsSection />}
        {active === 'Typography' && <TypographySection />}
        {active === 'Buttons' && <ButtonsSection />}
        {active === 'Inputs' && <InputsSection />}
        {active === 'Badges' && <BadgesSection />}
        {active === 'Shadows' && <ShadowsSection />}
        {active === 'Gradients' && <GradientsSection />}
      </main>
    </div>
  );
}

/* ── Colors ── */
function ColorsSection() {
  const blues = [10, 20, 25, 30, 40, 45, 50, 55, 60, 70, 80, 90, 99];
  const grays = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 99];
  const accents = [10, 20, 30, 40, 45, 50, 55, 60, 70, 80, 90, 99];

  return (
    <Section title="Color Palette">
      <Swatch name="bizmong-blue" shades={blues} />
      <Swatch name="crystal-blue" shades={accents} />
      <Swatch name="mint" shades={accents} />
      <Swatch name="green" shades={accents} />
      <Swatch name="red" shades={accents} />
      <Swatch name="orange" shades={accents} />
      <Swatch name="purple" shades={accents} />
      <Swatch name="pink" shades={accents} />
      <Swatch name="spring-yellow" shades={accents} />
      <Swatch name="cool-gray" shades={grays} />
      <Swatch name="warm-gray" shades={grays} />
    </Section>
  );
}

/* ── Typography ── */
function TypographySection() {
  const styles = [
    { cls: 'text-display-2', label: 'Display 2 (56px)' },
    { cls: 'text-display-3', label: 'Display 3 (40px)' },
    { cls: 'text-title-1', label: 'Title 1 (36px)' },
    { cls: 'text-title-2', label: 'Title 2 (28px)' },
    { cls: 'text-title-3', label: 'Title 3 (24px)' },
    { cls: 'text-heading-1', label: 'Heading 1 (22px)' },
    { cls: 'text-heading-2', label: 'Heading 2 (20px)' },
    { cls: 'text-headline-1', label: 'Headline 1 (18px)' },
    { cls: 'text-headline-2', label: 'Headline 2 (17px)' },
    { cls: 'text-body-1', label: 'Body 1 (16px)' },
    { cls: 'text-body-2', label: 'Body 2 (15px)' },
    { cls: 'text-label-1', label: 'Label 1 (14px)' },
    { cls: 'text-label-2', label: 'Label 2 (13px)' },
    { cls: 'text-label-3', label: 'Label 3 (12px)' },
    { cls: 'text-caption-1', label: 'Caption 1 (12px)' },
    { cls: 'text-caption-2', label: 'Caption 2 (11px)' },
  ];

  return (
    <Section title="Typography Scale">
      <div className="space-y-4 bg-white rounded-2xl p-6 shadow-normal">
        {styles.map(({ cls, label }) => (
          <div
            key={cls}
            className="flex items-baseline gap-4 border-b border-cool-gray-10 pb-3 last:border-none"
          >
            <span className="text-caption-1 text-cool-gray-45 w-40 shrink-0">
              {label}
            </span>
            <span className={`${cls} text-cool-gray-90 font-medium`}>
              우리가게 진단 결과
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── Buttons ── */
function ButtonsSection() {
  const variants = ['contained', 'outlined', 'tonal', 'glass', 'ghost'] as const;
  const colors = ['primary', 'cool-gray', 'orange', 'red'] as const;
  const heights = [28, 32, 36, 40, 44, 48, 54] as const;

  return (
    <Section title="Buttons">
      {/* Variant x Color */}
      <div className="bg-white rounded-2xl p-6 shadow-normal mb-6">
        <h3 className="text-headline-2 font-semibold mb-4">
          Variant x Color
        </h3>
        <div className="space-y-4">
          {variants.map((v) => (
            <div key={v} className="flex flex-wrap items-center gap-2">
              <span className="text-label-2 text-cool-gray-45 w-20">{v}</span>
              {colors.map((c) => (
                <Button key={c} variant={v} color={c} height={36}>
                  {c}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Heights */}
      <div className="bg-white rounded-2xl p-6 shadow-normal mb-6">
        <h3 className="text-headline-2 font-semibold mb-4">Height Scale</h3>
        <div className="flex flex-wrap items-end gap-3">
          {heights.map((h) => (
            <Button key={h} variant="contained" color="primary" height={h}>
              H{h}
            </Button>
          ))}
        </div>
      </div>

      {/* With Icons */}
      <div className="bg-white rounded-2xl p-6 shadow-normal">
        <h3 className="text-headline-2 font-semibold mb-4">With Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="contained" color="primary" height={40}>
            <Search className="size-4 mr-1" /> 검색
          </Button>
          <Button variant="outlined" color="primary" height={40}>
            <Plus className="size-4 mr-1" /> 추가
          </Button>
          <Button variant="tonal" color="cool-gray" height={40}>
            <Settings className="size-4 mr-1" /> 설정
          </Button>
          <Button variant="contained" color="primary" height={40}>
            다음 <ArrowRight className="size-4 ml-1" />
          </Button>
        </div>
      </div>
    </Section>
  );
}

/* ── Inputs ── */
function InputsSection() {
  return (
    <Section title="Inputs">
      <div className="bg-white rounded-2xl p-6 shadow-normal space-y-6">
        <div className="space-y-3">
          <h3 className="text-headline-2 font-semibold">Sizes</h3>
          <div className="flex flex-wrap gap-3 items-end">
            <Input size="xxs" placeholder="xxs" />
            <Input size="xs" placeholder="xs" />
            <Input size="sm" placeholder="sm" />
            <Input size="md" placeholder="md" />
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-headline-2 font-semibold">States</h3>
          <div className="flex flex-wrap gap-3 items-end">
            <Input size="md" placeholder="Default" />
            <Input size="md" status="error" placeholder="Error" />
            <Input size="md" readOnly value="Read only" />
            <Input size="md" disabled placeholder="Disabled" />
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-headline-2 font-semibold">Backgrounds</h3>
          <div className="flex flex-wrap gap-3 items-end">
            <Input size="md" bg="white" placeholder="White bg" />
            <Input size="md" bg="cool-gray" placeholder="Cool gray bg" />
            <Input size="md" bg="transparent" placeholder="Transparent bg" />
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── Badges ── */
function BadgesSection() {
  return (
    <Section title="Badges">
      <div className="bg-white rounded-2xl p-6 shadow-normal">
        <div className="flex flex-wrap gap-3 items-center">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>

        <h3 className="text-headline-2 font-semibold mt-6 mb-3">
          Usage Examples
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Star className="size-4 text-spring-yellow-55" />
            <span className="text-body-2">매장 평점</span>
            <Badge variant="default">4.8</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="size-4 text-red-50" />
            <span className="text-body-2">리뷰 수</span>
            <Badge variant="secondary">1,234</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="size-4 text-bizmong-blue-50" />
            <span className="text-body-2">알림</span>
            <Badge variant="destructive">3</Badge>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── Shadows ── */
function ShadowsSection() {
  const shadows = ['shadow-normal', 'shadow-emphasize', 'shadow-strong', 'shadow-heavy'] as const;

  return (
    <Section title="Shadows">
      <div className="grid grid-cols-2 gap-6">
        {shadows.map((s) => (
          <div
            key={s}
            className={`bg-white rounded-2xl p-6 ${s} flex flex-col items-center justify-center h-32`}
          >
            <span className="text-body-1 font-medium text-cool-gray-70">
              {s.replace('shadow-', '')}
            </span>
            <span className="text-caption-1 text-cool-gray-45 mt-1">{s}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── Gradients ── */
function GradientsSection() {
  const gradients = [
    { name: 'Gradient 1', var: 'var(--background-image-gradient-1)', desc: 'Primary CTA' },
    { name: 'Gradient 2', var: 'var(--background-image-gradient-2)', desc: 'Pastel decorative' },
    { name: 'Gradient 3', var: 'var(--background-image-gradient-3)', desc: 'Green to blue' },
    { name: 'Gradient 4', var: 'var(--background-image-gradient-4)', desc: 'Light vertical' },
    { name: 'Gradient 5', var: 'var(--background-image-gradient-5)', desc: 'White fade' },
  ];

  return (
    <Section title="Gradients">
      <div className="space-y-4">
        {gradients.map((g) => (
          <div
            key={g.name}
            className="rounded-2xl h-24 flex items-center justify-between px-6 shadow-normal"
            style={{ backgroundImage: g.var }}
          >
            <span className="text-headline-1 font-semibold text-white drop-shadow-md">
              {g.name}
            </span>
            <span className="text-body-2 text-white/80 drop-shadow-md">
              {g.desc}
            </span>
          </div>
        ))}

        <div className="bg-white rounded-2xl p-6 shadow-normal">
          <h3 className="text-headline-2 font-semibold mb-3">Gradient Text</h3>
          <p className="text-title-2 font-bold text-gradient-1">
            우리가게 진단 결과를 확인해보세요
          </p>
        </div>
      </div>
    </Section>
  );
}
