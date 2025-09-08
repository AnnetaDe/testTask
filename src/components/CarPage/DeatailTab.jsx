export const CarDetailsTabs = ({ car }) => {
  const featureBadges = (
    <div className="rounded-2xl bg-gray-50 p-6">
      <div className="flex flex-wrap gap-3">
        {features.map(f => (
          <span
            key={f}
            className="inline-flex items-center gap-2 rounded-full bg-gray-200/60 px-4 py-2 text-sm text-gray-800"
          >
            {/* slot for icon if you have one */}
            {f}
          </span>
        ))}
      </div>

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
    </div>
  );

  const reviews = (
    <ul className="space-y-4">
      {(car?.reviews || []).map((r, i) => (
        <li key={i} className="flex gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 font-semibold">
            {r.author?.[0] || 'U'}
          </div>
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="font-medium">{r.author || 'User'}</span>
              <Stars count={r.rating || 4} />
            </div>
            <p className="text-gray-700">{r.text || ''}</p>
          </div>
        </li>
      ))}
      {!car?.reviews?.length && (
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-600">
          No reviews yet.
        </div>
      )}
    </ul>
  );

  return (
    <Tabs
      tabs={[
        { label: 'Features', content: featureBadges },
        { label: 'Reviews', content: reviews },
      ]}
    />
  );
};

const Stars = ({ count = 0 }) => (
  <div className="text-amber-500">
    {'★★★★★'.slice(0, count)}
    <span className="text-gray-300">{'★★★★★'.slice(0, Math.max(0, 5 - count))}</span>
  </div>
);
