'use client';

export default function ProgramsPage() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Program Management</h2>
        <button className="px-4 py-2 bg-[#4242ff] text-white rounded-lg hover:bg-[#3232e6] transition-colors">
          Add Program
        </button>
      </div>
      <p className="text-gray-600">Program management features will be implemented here.</p>
    </div>
  );
}