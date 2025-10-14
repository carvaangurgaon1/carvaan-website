"use client";

interface PageHeaderProps {
  title: string;
  breadcrumbs?: string;
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="mb-6">
      {/* Breadcrumbs */}
      {breadcrumbs && (
        <div className="text-sm text-gray-500 mb-1">
          {breadcrumbs.split(">").map((crumb, index, arr) => (
            <span key={index}>
              {crumb.trim()}
              {index < arr.length - 1 && (
                <span className="mx-2 text-gray-400">›</span>
              )}
            </span>
          ))}
        </div>
      )}

      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
    </div>
  );
}
