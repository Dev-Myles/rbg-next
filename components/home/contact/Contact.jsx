import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FlashMessage from '../flash/FlashMessage';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [isSubmited, setSubmit] = useState();

  function deleteFlash() {
    setSubmit();
  }

  const onSubmit = async (data, e) => {
    try {
      e.preventDefault();

      e.target.reset();
      const JSONDATA = JSON.stringify(data);

      const endPoint = '/api/contactFormHandler';
      const action = 'POST';
      const options = {
        method: action,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONDATA,
      };

      const response = await fetch(endPoint, options);
      const res = await response.json();
      return setSubmit({ status: res.status, message: res.message });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className="[&>label]:max-w-prose [&>label]:mx-auto [&>label>*]:p-1 p-2 border-t-[1px] [&>label>*]:max-w-prose border-white [&>label]:my-[2px]  py-5 [&>label]:flex [&>label]:flex-col text-black "
        onSubmit={handleSubmit(onSubmit)}
        id="form"
      >
        <h2 className="text-3xl md:text-5xl mt-5 text-white font-bas md:text-center">
          Contact Us Below
        </h2>
        <h6 className="text-white md:text-center">All fields are required</h6>

        {isSubmited == undefined ? null : (
          <FlashMessage
            status={isSubmited.status}
            message={isSubmited.message}
            onClick={deleteFlash}
          />
        )}

        <label htmlFor="name">
          Name
          <input
            name="name"
            className=""
            type="text"
            placeholder="First Last"
            {...register('name', {
              required: true,
              pattern: /^[a-zA-Z ]{2,32}$/i,
              maxLength: 32,
              minLength: 2,
            })}
          />
          {errors.name && (
            <span className="text-red-500">Please enter a valid Name</span>
          )}
        </label>

        <label htmlFor="email">
          Email
          <input
            name="email"
            className=""
            type="email"
            placeholder="Email@email.com"
            {...register('email', {
              maxLength: 30,
              minLength: 6,
              required: true,
              pattern:
                /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i,
            })}
          />
          {errors.email && (
            <span className="text-red-500">Please enter a valid Email</span>
          )}
        </label>

        <label htmlFor="message">
          Message
          <textarea
            name="message"
            className="h-72"
            type="text"
            {...register('message', {
              required: true,
              maxLength: 1000,
              pattern: /^[A-Za-z0-9 _.,!"'/$]+$/i,
            })}
          />
          {errors.message && (
            <span className="text-red-500">Please enter a valid message.</span>
          )}
        </label>
        {isSubmitting ? (
          <span className="text-green-500">Sending message...</span>
        ) : null}
        <input
          className="text-xl font-bas bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white block mx-auto rounded-full px-10 py-2 my-5"
          type="submit"
          value="Send Message"
        />
      </form>
      <Link href="/policy" className="text-white text-center ">
        <a className="font-bas text-2xl w-fit my-4 mx-auto block">Policy</a>
      </Link>
    </>
  );
}
