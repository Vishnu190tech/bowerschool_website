import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test Forms - Bower School',
  description: 'Test forms and integration features',
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}