import { ToastContainer } from 'react-toastify';
import Theme from '../styles/theme';
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
        <Analytics />
        <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
      </Theme>
    </>
  );
}
 