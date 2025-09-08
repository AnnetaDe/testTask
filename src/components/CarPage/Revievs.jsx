export const Reviews = ({ car }) => {
  return (
    <ul className="space-y-6">
      {(car?.reviews || []).map((r, i) => {
        const rating = Math.max(0, Math.min(5, r.reviewer_rating || 0));
        return (
          <li key={i} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 font-semibold">
              {r.reviewer_name?.[0] || 'U'}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-gray-900">{r.reviewer_name || 'User'}</span>
                <div
                  className="flex items-center text-sm leading-none"
                  aria-label={`Rating ${rating} of 5`}
                >
                  <span className="text-amber-500">{'★'.repeat(rating)}</span>
                  <span className="text-gray-300">{'★'.repeat(5 - rating)}</span>
                </div>
              </div>

              {r.text && <p className="mt-2 text-gray-700">{r.text}</p>}
              {r.comment && <p className="mt-2 text-gray-500">{r.comment}</p>}
            </div>
          </li>
        );
      })}

      {!car?.reviews?.length && (
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-600">
          No reviews yet.
        </div>
      )}
    </ul>
  );
};
