export default function PageHeader({ title, breadcrumbs }: { title: string; breadcrumbs: string }) {
  return (
    <>
      <div className="text-sm text-gray-500 mb-1">{breadcrumbs}</div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">{title}</h1>
    </>
  );
}
