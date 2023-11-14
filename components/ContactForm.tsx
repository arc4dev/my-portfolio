import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

const ContactForm = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:${pageInfo.email}?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-fit mx-auto text-sm sm:text-base">
      <div className="w-full space-y-2 sm:space-x-2 sm:space-y-0 sm:flex">
        <input
          className="contactInput"
          placeholder="Name"
          type="text"
          required
          {...register('name')}
        />
        <input
          className="contactInput"
          placeholder="Email"
          type="email"
          {...register('email')}
        />
      </div>

      <input
        className="contactInput"
        placeholder="Subject"
        type="text"
        {...register('subject')}
      />
      <textarea
        className="contactInput"
        placeholder="Message"
        {...register('message')}
      />

      <button
        className="font-semibold w-full text-gray-100 border border-gray-500/20 bg-gradient-to-br from-violet-600 to-violet-900 rounded-md py-4 shadow-sm shadow-action hover:shadow-md transition duration-200 ease-in-out hover:opacity-90 active:opacity-70"
        type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
