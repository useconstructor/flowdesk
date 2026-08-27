import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FlowDesk',
  description: 'Plataforma SaaS de gestión de proyectos para equipos remotos con tableros kanban, seguimiento de tiempo, reportes automáticos e integraciones con Slack y GitHub.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900" style={{ backgroundColor: '#0A1628' }}>
        {children}
      </body>
    </html>
  );
}
