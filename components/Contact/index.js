import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import schema from './schema';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        data,
      );
      if (response.status === 200) {
        setLoading(false);
        setSuccess(true);
      }
    } catch (err) {
      setLoading(false);
      setError(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-3/4 mt-2">
      {error && (
        <div className="bg-white border-l-4 rounded-lg border-orange-500 p-3 mt-5 md:text-xl text-orange-500 mb-6 dark:bg-zinc-800/50 transition duration-500 ease-in-out" role="alert">
          <p>{error}</p>
        </div>
      )}
      {success ? (
        <div className="bg-white border-l-4 rounded-lg border-green-500 p-3 mt-5 md:text-xl text-green-500 mb-6 dark:bg-zinc-800/50 transition duration-500 ease-in-out" role="alert">
          <p>Thank you for your message!</p>
        </div>
      ) : (
        <>
          <div className="mb-1 mt-6">
            <input
              type="text"
              id="name"
              placeholder="Your name"
              {...register('name')}
              className={`appearance-none border transition duration-500 ease-in-out ${
                errors.name ? 'border-orange-500' : 'border-zinc-500/70 dark:border-zinc-500/40'
              } font-mplus rounded-lg font-light text-sm w-full py-3 px-3 text-gray-700 dark:text-zinc-50 dark:bg-zinc-800/10 leading-tight focus:outline-none focus:shadow-outline placeholder:font-normal`}
            />
            {errors.name && (
              <p className="text-orange-500 text-xs italic mt-1 text-left">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-2">
            <input
              type="text"
              id="email"
              placeholder="Your email"
              {...register('email')}
              className={`appearance-none border transition duration-500 ease-in-out ${
                errors.email ? 'border-orange-500' : 'border-zinc-500/70 dark:border-zinc-500/40'
              } font-mplus rounded-lg font-light text-sm w-full py-3 px-3 text-gray-700 dark:text-zinc-50 dark:bg-zinc-800/10 leading-tight focus:outline-none focus:shadow-outline placeholder:font-normal`}
            />
            {errors.email && (
            <p className="text-orange-500 text-xs italic mt-1 text-left">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              placeholder="Your message"
              rows="4"
              {...register('message')}
              className={`appearance-none border transition duration-500 ease-in-out ${
                errors.message ? 'border-orange-500' : 'border-zinc-500/70 dark:border-zinc-500/40'
              } font-mplus rounded-lg font-light text-sm w-full py-2 px-3 text-gray-700 dark:text-zinc-50 dark:bg-zinc-800/10 leading-tight focus:outline-none focus:shadow-outline placeholder:font-normal`}
            />
            {errors.message && (
            <p className="text-orange-500 text-xs italic mt-1 text-left">{errors.message.message}</p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              className={`font-mplus rounded-lg font-semibold text-sm w-full py-3 px-3 text-zinc-50 leading-tight bg-teal-900 p-3 hover:shadow-zinc-900/20 dark:hover:shadow-teal-200/5 hover:shadow-lg transition ease-in duration-100${
                loading && 'opacity-50 cursor-not-allowed'
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send me a message'}
            </button>
          </div>
        </>
      )}
    </form>
  );
}
