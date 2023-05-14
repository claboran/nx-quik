import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h1 class="card-title text-primary uppercase">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="32"
               height="32"
               class="fill-current"
               viewBox="0 0 512 512">
            <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
          </svg>
          Welcome to nx-quik
        </h1>
        <div class="divider"></div>
        <div class="w-full flex flex-col content-center">
          <div class="w-full p-2">
            <h2 class="card-title text-primary uppercase">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="24"
                   height="24"
                   class="fill-current"
                   viewBox="0 0 576 512">
                <path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
              </svg>
              Commands
            </h2>
          </div>
          <div class="mockup-code">
            <pre data-prefix="$"><code># Start the dev server and watch for changes</code></pre>
            <pre data-prefix="$"><code>nx run nx-quik:serve</code></pre>
            <pre data-prefix="$"><code># Production build and start preview server</code></pre>
            <pre data-prefix="$"><code>npm run preview</code></pre>
            <pre data-prefix="$"><code># Production build</code></pre>
            <pre data-prefix="$"><code>npm run build</code></pre>
            <pre data-prefix="$"><code># Select an integration to add</code></pre>
            <pre data-prefix="$"><code>npm run qwik add</code></pre>
          </div>
        </div>
        <div class="card-actions justify-between">
          <Link class="link" href="/flower/">
            Blow my mind 🤯
          </Link>
          <Link class="btn btn-primary" href="/deployments/">
            Deployments
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 class="fill-current"
                 viewBox="0 0 320 512">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>

    //
    //   <h2>Community</h2>
    //
    //   <ul>
    //     <li>
    //       <span>Questions or just want to say hi? </span>
    //       <a href="https://qwik.builder.io/chat" target="_blank">
    //         Chat on discord!
    //       </a>
    //     </li>
    //     <li>
    //       <span>Follow </span>
    //       <a href="https://twitter.com/QwikDev" target="_blank">
    //         @QwikDev
    //       </a>
    //       <span> on Twitter</span>
    //     </li>
    //     <li>
    //       <span>Open issues and contribute on </span>
    //       <a href="https://github.com/BuilderIO/qwik" target="_blank">
    //         GitHub
    //       </a>
    //     </li>
    //     <li>
    //       <span>Watch </span>
    //       <a href="https://qwik.builder.io/media/" target="_blank">
    //         Presentations, Podcasts, Videos, etc.
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to nx-quik',
  meta: [
    {
      name: 'description',
      content: 'Welcome to nx-quik',
    },
  ],
};
