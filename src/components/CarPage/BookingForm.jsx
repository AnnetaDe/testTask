import { useState } from 'react';

export const BookingCard = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '', comment: '' });
  const canSend = form.name && form.email && form.date;

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="rounded-2xl border border-g3 bg-white p-6 md:p-8 shadow-sm">
      <h3 className="text-lg font-semibold ">Book your campervan now</h3>
      <p className="mt-1 mb-6 text-sm">Stay connected! We are always ready to help you.</p>

      <form
        onSubmit={e => {
          e.preventDefault();
          if (!canSend) return;
          console.log('Booking form submitted', form);
        }}
        className="flex flex-col gap-4"
      >
        <input
          name="name"
          placeholder="Name*"
          value={form.name}
          onChange={onChange}
          className="h-12 w-full rounded-xl border border-g3 bg-g3 px-4 text-sm placeholder-g2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={form.email}
          onChange={onChange}
          className="h-12 w-full rounded-xl border  border-g3 bg-g3 px-4 text-sm placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
        <input
          type="date"
          name="date"
          placeholder="Booking date*"
          value={form.date}
          onChange={onChange}
          className="h-12 w-full rounded-xl border  border-g3 bg-g3 px-4 text-sm placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
        <textarea
          name="comment"
          placeholder="Comment"
          rows={4}
          value={form.comment}
          onChange={onChange}
          className="w-full rounded-xl border border-g3 bg-g3 px-4 py-3 text-sm placeholder-g2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />

        <button
          type="submit"
          disabled={!canSend}
          className={`mx-auto mt-6 block h-12 w-40 rounded-full font-semibold text-white ${
            canSend ? 'bg-red hover:bg-hover-red' : 'bg-red cursor-not-allowed'
          }`}
        >
          Send
        </button>
      </form>
    </div>
  );
};
