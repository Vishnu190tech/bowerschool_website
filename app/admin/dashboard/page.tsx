import { redirect } from 'next/navigation';

export default function DashboardRedirect() {
  // Redirect old dashboard route to new overview page
  redirect('/admin');
}