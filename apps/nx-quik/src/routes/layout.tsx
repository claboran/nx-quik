import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import Footer from "../components/footer/footer";

export default component$(() => {
  return (
    <>
      <main class="main">
        <Header/>
        <section class="section-slot">
          <Slot />
        </section>
        <Footer/>
      </main>
    </>
  );
});
