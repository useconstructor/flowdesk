"use client"

import { useState } from 'react'
import {
  Menu,
  X,
  Kanban,
  Clock,
  BarChart3,
  MessageSquare,
  Github,
  Target,
  Activity,
  Bell,
  Users,
  Code,
  ChevronDown,
  ChevronRight,
  Star,
  ArrowRight,
  Check,
  Zap,
  Globe,
  Shield,
  Sparkles,
  Play,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react'

const colors = {
  darkBg: '#0A1628',
  navy: '#1E3A5F',
  lime: '#84CC16',
  light: '#F8FAFC',
  slate: '#64748B'
}

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' }
  ]

  const stats = [
    { value: '50K+', label: 'Equipos activos' },
    { value: '2.5M', label: 'Tareas completadas' },
    { value: '99.9%', label: 'Uptime garantizado' },
    { value: '4.9/5', label: 'Valoración usuarios' }
  ]

  const features = [
    {
      icon: Kanban,
      title: 'Tableros Kanban',
      description: 'Organiza tu trabajo con tableros drag and drop intuitivos. Visualiza el progreso de cada tarea en tiempo real.',
      size: 'large'
    },
    {
      icon: Clock,
      title: 'Seguimiento de Tiempo',
      description: 'Controla las horas dedicadas a cada proyecto automáticamente.',
      size: 'small'
    },
    {
      icon: BarChart3,
      title: 'Reportes Automáticos',
      description: 'Genera informes personalizados con un clic.',
      size: 'small'
    },
    {
      icon: MessageSquare,
      title: 'Integración con Slack',
      description: 'Recibe notificaciones y actualiza tareas directamente desde Slack. Sincronización bidireccional completa.',
      size: 'medium'
    },
    {
      icon: Github,
      title: 'Integración con GitHub',
      description: 'Conecta tus repositorios y vincula commits con tareas automáticamente.',
      size: 'medium'
    },
    {
      icon: Target,
      title: 'Sprints y Milestones',
      description: 'Planifica entregas con metodología ágil.',
      size: 'small'
    },
    {
      icon: Activity,
      title: 'Dashboard en Tiempo Real',
      description: 'Monitorea la productividad de tu equipo con métricas actualizadas.',
      size: 'small'
    },
    {
      icon: Bell,
      title: 'Notificaciones Inteligentes',
      description: 'Alertas contextuales que priorizan lo importante.',
      size: 'small'
    },
    {
      icon: Users,
      title: 'Roles y Permisos',
      description: 'Control granular de acceso para cada miembro del equipo.',
      size: 'small'
    },
    {
      icon: Code,
      title: 'API Abierta',
      description: 'Construye integraciones personalizadas con nuestra API RESTful completa.',
      size: 'medium'
    }
  ]

  const services = [
    {
      icon: Zap,
      title: 'Onboarding Express',
      description: 'Migra todos tus proyectos en menos de 24 horas con nuestro equipo de soporte dedicado.'
    },
    {
      icon: Globe,
      title: 'Equipos Globales',
      description: 'Soporte para múltiples zonas horarias con sincronización inteligente de reuniones.'
    },
    {
      icon: Shield,
      title: 'Seguridad Enterprise',
      description: 'Cifrado de extremo a extremo, SSO, y cumplimiento con SOC 2 y GDPR.'
    },
    {
      icon: Sparkles,
      title: 'Automatizaciones',
      description: 'Crea flujos de trabajo personalizados sin código para eliminar tareas repetitivas.'
    }
  ]

  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/mes',
      description: 'Perfecto para equipos pequeños que inician su transformación digital',
      features: [
        'Hasta 10 usuarios',
        'Tableros ilimitados',
        'Seguimiento de tiempo básico',
        '5GB de almacenamiento',
        'Integración con Slack',
        'Soporte por email'
      ],
      cta: 'Comenzar gratis',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/mes',
      description: 'Para equipos en crecimiento que necesitan más potencia y control',
      features: [
        'Hasta 50 usuarios',
        'Todo de Starter',
        'Reportes avanzados',
        '50GB de almacenamiento',
        'Integración con GitHub',
        'API access',
        'Soporte prioritario'
      ],
      cta: 'Probar 14 días gratis',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      period: '',
      description: 'Soluciones a medida para organizaciones con requisitos específicos',
      features: [
        'Usuarios ilimitados',
        'Todo de Professional',
        'SSO y SAML',
        'Almacenamiento ilimitado',
        'SLA garantizado',
        'Onboarding dedicado',
        'Account manager personal'
      ],
      cta: 'Contactar ventas',
      highlighted: false
    }
  ]

  const testimonials = [
    {
      quote: 'FlowDesk transformó completamente cómo gestionamos proyectos. La integración con GitHub nos ahorra horas cada semana.',
      role: 'CTO',
      company: 'Startup de Fintech',
      rating: 5
    },
    {
      quote: 'El seguimiento de tiempo automático es increíble. Finalmente tenemos visibilidad real de dónde invertimos nuestras horas.',
      role: 'Project Manager',
      company: 'Agencia Digital',
      rating: 5
    },
    {
      quote: 'Probamos muchas herramientas antes de FlowDesk. Ninguna se acerca a la experiencia fluida y las integraciones nativas.',
      role: 'Head of Engineering',
      company: 'Empresa SaaS B2B',
      rating: 5
    },
    {
      quote: 'Los reportes automáticos nos permiten tomar decisiones basadas en datos reales, no en suposiciones.',
      role: 'CEO',
      company: 'Consultora Tech',
      rating: 5
    }
  ]

  const faqs = [
    {
      question: '¿Puedo migrar mis proyectos desde otras herramientas?',
      answer: 'Sí, ofrecemos importación directa desde Trello, Asana, Jira y Monday. Nuestro equipo de soporte te ayudará en todo el proceso de migración sin pérdida de datos.'
    },
    {
      question: '¿Cómo funciona el periodo de prueba?',
      answer: 'Todos los planes incluyen 14 días de prueba gratuita con acceso completo a todas las funcionalidades. No se requiere tarjeta de crédito para comenzar.'
    },
    {
      question: '¿Qué integraciones están disponibles?',
      answer: 'Actualmente ofrecemos integraciones nativas con Slack, GitHub, GitLab, Google Calendar, Zoom y más de 50 herramientas a través de Zapier. Nuestra API abierta permite crear integraciones personalizadas.'
    },
    {
      question: '¿Mis datos están seguros?',
      answer: 'Absolutamente. Utilizamos cifrado AES 256 en reposo y TLS 1.3 en tránsito. Somos compatibles con SOC 2 Type II y GDPR. Los datos se almacenan en centros de datos certificados ISO 27001.'
    },
    {
      question: '¿Puedo cambiar de plan en cualquier momento?',
      answer: 'Sí, puedes actualizar o degradar tu plan cuando quieras. Los cambios se aplican inmediatamente y ajustamos la facturación de forma proporcional.'
    },
    {
      question: '¿Ofrecen descuentos para startups o ONGs?',
      answer: 'Sí, tenemos programas especiales para startups en etapa temprana, organizaciones sin fines de lucro e instituciones educativas. Contacta con nuestro equipo para más información.'
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <main style={{ backgroundColor: colors.darkBg, color: colors.light }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: `${colors.darkBg}CC`, borderColor: `${colors.navy}50` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${colors.navy}, ${colors.lime})` }}>
                <Kanban className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>FlowDesk</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: colors.slate }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#pricing" className="text-sm font-medium transition-opacity hover:opacity-80" style={{ color: colors.light }}>
                Iniciar sesión
              </a>
              <a
                href="#pricing"
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: colors.lime, color: colors.darkBg }}
              >
                Empezar gratis
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileNavOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ backgroundColor: colors.darkBg }}
        >
          <div className="px-4 py-4 space-y-4 border-t" style={{ borderColor: `${colors.navy}50` }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="block text-base font-medium py-2"
                style={{ color: colors.slate }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t" style={{ borderColor: `${colors.navy}50` }}>
              <a href="#pricing" className="block text-base font-medium" style={{ color: colors.light }}>
                Iniciar sesión
              </a>
              <a
                href="#pricing"
                className="block w-full text-center px-4 py-3 rounded-lg font-semibold"
                style={{ backgroundColor: colors.lime, color: colors.darkBg }}
              >
                Empezar gratis
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: colors.lime }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: colors.navy }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border"
            style={{ backgroundColor: `${colors.navy}30`, borderColor: `${colors.lime}30` }}
          >
            <Sparkles className="w-4 h-4" style={{ color: colors.lime }} />
            <span className="text-sm font-medium">Nuevo: Integración nativa con GitHub Actions</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Gestión de proyectos
            <br />
            <span style={{ color: colors.lime }}>para equipos remotos</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10"
            style={{ color: colors.slate }}
          >
            Tableros kanban, seguimiento de tiempo, reportes automáticos e integraciones con las herramientas que ya usas. Todo en un solo lugar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.lime, color: colors.darkBg }}
            >
              Comenzar gratis
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 border"
              style={{ borderColor: colors.slate, color: colors.light }}
            >
              <Play className="w-5 h-5" />
              Ver demo
            </a>
          </div>

          {/* Hero Visual - Dashboard Preview */}
          <div
            className="relative max-w-4xl mx-auto rounded-2xl p-1"
            style={{ background: `linear-gradient(135deg, ${colors.navy}, ${colors.lime}40)` }}
          >
            <div
              className="rounded-xl p-6 backdrop-blur-xl"
              style={{ backgroundColor: `${colors.darkBg}95` }}
            >
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ef4444' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.lime }} />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg" style={{ backgroundColor: colors.navy }}>
                  <Activity className="w-4 h-4" style={{ color: colors.lime }} />
                  <span className="text-sm">En vivo</span>
                </div>
              </div>

              {/* Mock Kanban Board */}
              <div className="grid grid-cols-3 gap-4">
                {['Por hacer', 'En progreso', 'Completado'].map((column, i) => (
                  <div key={column} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium" style={{ color: colors.slate }}>{column}</span>
                      <span
                        className="text-xs px-2 py-1 rounded"
                        style={{ backgroundColor: colors.navy }}
                      >
                        {3 - i}
                      </span>
                    </div>
                    {[...Array(3 - i)].map((_, j) => (
                      <div
                        key={j}
                        className="p-3 rounded-lg border"
                        style={{ backgroundColor: `${colors.navy}50`, borderColor: `${colors.navy}` }}
                      >
                        <div
                          className="h-2 rounded mb-2"
                          style={{ backgroundColor: colors.slate, width: `${60 + j * 15}%`, opacity: 0.3 }}
                        />
                        <div
                          className="h-2 rounded"
                          style={{ backgroundColor: colors.slate, width: `${40 + j * 10}%`, opacity: 0.2 }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 border-y" style={{ borderColor: `${colors.navy}50`, backgroundColor: `${colors.navy}20` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: colors.lime }}
                >
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base" style={{ color: colors.slate }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Todo lo que necesitas para
              <br />
              <span style={{ color: colors.lime }}>gestionar equipos remotos</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.slate }}>
              Herramientas potentes diseñadas para maximizar la productividad de tu equipo, sin importar dónde trabajen.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isLarge = feature.size === 'large'
              const isMedium = feature.size === 'medium'

              return (
                <div
                  key={feature.title}
                  className={`
                    p-6 rounded-2xl border backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-opacity-50
                    ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                    ${isMedium ? 'md:col-span-2' : ''}
                  `}
                  style={{
                    backgroundColor: `${colors.navy}30`,
                    borderColor: `${colors.navy}`,
                  }}
                >
                  <div
                    className={`
                      w-12 h-12 rounded-xl flex items-center justify-center mb-4
                      ${isLarge ? 'w-16 h-16' : ''}
                    `}
                    style={{ backgroundColor: `${colors.lime}20` }}
                  >
                    <Icon className={isLarge ? 'w-8 h-8' : 'w-6 h-6'} style={{ color: colors.lime }} />
                  </div>
                  <h3
                    className={`font-bold mb-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={isLarge ? 'text-base' : 'text-sm'}
                    style={{ color: colors.slate }}
                  >
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 sm:py-32" style={{ backgroundColor: `${colors.navy}20` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Más que una herramienta,
              <br />
              <span style={{ color: colors.lime }}>un partner de productividad</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="group p-8 rounded-2xl border backdrop-blur-xl transition-all hover:border-opacity-50"
                  style={{
                    background: `linear-gradient(135deg, ${colors.navy}40, ${colors.darkBg}80)`,
                    borderColor: colors.navy
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${colors.lime}20, ${colors.navy}40)` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: colors.lime }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ color: colors.slate }}>
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Precios simples,
              <br />
              <span style={{ color: colors.lime }}>valor extraordinario</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.slate }}>
              Elige el plan que mejor se adapte a tu equipo. Todos incluyen 14 días de prueba gratuita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`
                  relative p-8 rounded-2xl border transition-all hover:scale-[1.02]
                  ${plan.highlighted ? 'ring-2' : ''}
                `}
                style={{
                  backgroundColor: plan.highlighted ? `${colors.navy}50` : `${colors.navy}20`,
                  borderColor: plan.highlighted ? colors.lime : colors.navy,
                  ringColor: colors.lime
                }}
              >
                {plan.highlighted && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: colors.lime, color: colors.darkBg }}
                  >
                    Más popular
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-4xl font-bold"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: colors.lime }}
                    >
                      {plan.price}
                    </span>
                    <span style={{ color: colors.slate }}>{plan.period}</span>
                  </div>
                  <p className="text-sm mt-2" style={{ color: colors.slate }}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.lime }} />
                      <span className="text-sm" style={{ color: colors.slate }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.name === 'Enterprise' ? 'mailto:sales@flowdesk.com' : '#pricing'}
                  className={`
                    block w-full py-3 rounded-xl text-center font-semibold transition-all hover:scale-105
                    ${plan.highlighted ? '' : 'border'}
                  `}
                  style={{
                    backgroundColor: plan.highlighted ? colors.lime : 'transparent',
                    color: plan.highlighted ? colors.darkBg : colors.light,
                    borderColor: colors.slate
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-20 sm:py-32" style={{ backgroundColor: `${colors.navy}20` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Equipos que confían en
              <br />
              <span style={{ color: colors.lime }}>FlowDesk</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className="p-8 sm:p-12 rounded-2xl border backdrop-blur-xl"
              style={{ backgroundColor: `${colors.navy}30`, borderColor: colors.navy }}
            >
              <div className="flex gap-1