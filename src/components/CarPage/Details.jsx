export const Details = ({ car }) => {
  return (
    <div className="mt-8">
      <h3 className="mb-3 text-lg font-semibold text-gray-900">Vehicle details</h3>
      <div className="h-px w-full bg-gray-200 mb-3" />
      <dl className="grid grid-cols-2 gap-y-3 text-sm">
        <dt className="text-gray-600">Form</dt>
        <dd className="text-gray-900 text-right">{car?.type || 'Panel truck'}</dd>

        <dt className="text-gray-600">Length</dt>
        <dd className="text-gray-900 text-right">{car?.length || '5.4 m'}</dd>

        <dt className="text-gray-600">Width</dt>
        <dd className="text-gray-900 text-right">{car?.width || '2.01 m'}</dd>

        <dt className="text-gray-600">Height</dt>
        <dd className="text-gray-900 text-right">{car?.height || '2.05 m'}</dd>

        <dt className="text-gray-600">Tank</dt>
        <dd className="text-gray-900 text-right">{car?.tank || '132 l'}</dd>

        <dt className="text-gray-600">Consumption</dt>
        <dd className="text-gray-900 text-right">{car?.consumption || '12.4 l/100km'}</dd>
      </dl>
    </div>
  );
};
