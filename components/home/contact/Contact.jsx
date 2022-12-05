import FadeWrap from '../../template/FadeWrap';
import styles from './contact.module.css';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FlashMessage from '../flash/FlashMessage';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    <FadeWrap>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Contact Form</h2>
        <hr />
        {isSubmited == undefined ? null : (
          <FlashMessage
            status={isSubmited.status}
            message={isSubmited.message}
            onClick={deleteFlash}
          />
        )}

        <label htmlFor="firstname">
          First name
          <input
            name="firstname"
            className={styles.textInput}
            type="text"
            placeholder="First name"
            {...register('firstname', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 22,
            })}
          />
          {errors.name && <span>Please enter a valid first name</span>}
        </label>

        <label htmlFor="lastname">
          Last name
          <input
            name="lastname"
            className={styles.textInput}
            type="text"
            placeholder="Last name"
            {...register('lastname', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 22,
            })}
          />
          {errors.lastname && <span>Please enter a valid last name</span>}
        </label>
        <label htmlFor="email">
          Email
          <input
            name="email"
            className={styles.emailInput}
            type="email"
            placeholder="Email@email.com"
            {...register('email', {
              maxLength: 30,
              required: true,
              pattern:
                /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
            })}
          />
          {errors.email && (
            <span className={styles.errorMessage}>
              Please enter a valid email
            </span>
          )}
        </label>
        <label htmlFor="subject">
          Subject
          <input
            name="subject"
            className={styles.textInput}
            type="text"
            placeholder="custom product, bug, etc..."
            {...register('subject', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 22,
            })}
          />
          {errors.subject && <span>Please enter a valid subject</span>}
        </label>

        <label htmlFor="message">
          Message
          <textarea
            name="message"
            className={styles.messageInput}
            type="text"
            {...register('message', { required: true, maxLength: 1000 })}
          />
          {errors.message && (
            <span className={styles.errorMessage}>
              Please enter a valid message
            </span>
          )}
        </label>
        <input className={styles.button} type="submit" value="Send Message" />
      </form>
    </FadeWrap>
  );
}
