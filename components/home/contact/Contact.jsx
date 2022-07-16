import FadeWrap from '../../template/FadeWrap';
import styles from './contact.module.css';

import Image from 'next/image';
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
      <div className={styles.formBodyWrap}>
        <div className={styles.formHelpWrap}>
          <h2>How to Use</h2>
          <hr />
          <p className={styles.howToUsePara}>
            You can fill out the form bellow to send a message regaurding our
            products and services.
            <br />
            <br />
            We only ship our products within the United States.
          </p>
          <div className={styles.imageWrap}>
            <Image
              src="/images/RBG-logo.svg"
              alt="rbg logo"
              height="400px"
              width="400px"
            />
          </div>
        </div>
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
          <div className={styles.inputWrap}>
            <label htmlFor="firstname">First name</label>
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
          </div>
          <div className={styles.inputWrap}>
            <label htmlFor="lastname">Last name</label>
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
          </div>
          <div className={styles.inputWrap}>
            <label htmlFor="email">Email</label>
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
          </div>
          <div className={styles.inputWrap}>
            <label htmlFor="subject">Subject</label>
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
          </div>
          <div className={styles.inputWrap}>
            <label htmlFor="message">Message</label>
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
          </div>
          <input className={styles.button} type="submit" value="Send Message" />
        </form>
      </div>
    </FadeWrap>
  );
}
