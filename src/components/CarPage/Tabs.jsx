import { useEffect, useRef, useState } from 'react';

export const Tabs = ({ tabs, initial = 0 }) => {
  const [active, setActive] = useState(initial);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current?.querySelector(`[data-tab="${active}"]`);
    const bar = ref.current?.querySelector('[data-indicator]');
    if (el && bar) {
      const { offsetLeft, offsetWidth } = el;
      bar.style.transform = `translateX(${offsetLeft}px)`;
      bar.style.width = `${offsetWidth}px`;
    }
  }, [active]);

  return (
    <div>
      <div ref={ref} className="relative border-b">
        <div className="flex gap-6 text-sm">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              data-tab={i}
              onClick={() => setActive(i)}
              className={`py-3 transition-colors ${
                i === active ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <span
          data-indicator
          className="absolute -bottom-[1px] left-0 h-[2px] w-0 bg-red transition-transform duration-300"
        />
      </div>
      <div className="mt-5">{tabs[active]?.content}</div>
    </div>
  );
};
