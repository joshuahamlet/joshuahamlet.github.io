import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion, AnimatePresence } from 'framer-motion'
import * as Yup from "yup";
import './EmailForm.css'

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  message: Yup.string().required("Required")
});

const EmailForm = ({ modalToggle, modalHandler }) => {

      
      /* Server State Handling */
      const [serverState, setServerState] = useState();
      const handleServerResponse = (ok, msg) => {
        setServerState({ok, msg});
      };
      const handleOnSubmit = (values, actions) => {
        axios({
          method: "POST",
          url: "https://cors-anywhere.herokuapp.com/http://formspree.io/mgengeno",
          data: values,
          headers: {"Access-Control-Allow-Origin": "*"}
        })
        .then(res => {
            actions.setSubmitting(false);
            actions.resetForm();
            handleServerResponse(true, "Thanks!");
          })
          .catch(error => {
            actions.setSubmitting(false);
            handleServerResponse(false, error.res.data.error);
          });
      };


      return (
        <div>

        <AnimatePresence>
        { modalToggle ?
          <motion.div
          initial={{y: '100vh', x: "-50%"}}
          animate={{y: "-50%", x: "-50%"}}
          exit={{y: '100vh'}}
          className="email-modal">  
          <h1>Message Me</h1>
          <Formik
            initialValues={{ email: "", message: "" }}
            onSubmit={handleOnSubmit}
            validationSchema={formSchema}
          >
            {({ isSubmitting }) => (
              <Form id="fs-frm" noValidate>
                <label htmlFor="email">Your Email:</label>
                <Field id="email" type="email" name="email" />
                <ErrorMessage name="email" className="errorMsg" component="p" />
                <label htmlFor="message">Message:</label>
                <Field id="message" name="message" component="textarea" rows="5" />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
                <ErrorMessage name="message" className="errorMsg" component="p" />
                {serverState && (
                  <p className={!serverState.ok ? "errorMsg" : ""}>
                    {serverState.msg}
                  </p>
                )}
              </Form>
            )}
          </Formik>
          </motion.div>
          : ""
        }
        </AnimatePresence>

        <AnimatePresence>
        { modalToggle ? 
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, delay: 0.05 }}
            onClick={modalHandler}
            className="modal-background"/>
          : ""
        }
        </AnimatePresence>
        </div>
      );
};

    export default EmailForm