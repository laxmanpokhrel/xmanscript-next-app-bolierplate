import "../app/globals.css";
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Component key={router.pathname} {...pageProps} />
    </>
  );
}
export default MyApp;
