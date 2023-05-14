import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="header">
      <div class="menu-container">
        <div>
          <a href="https://qwik.builder.io/" target="_blank">
            <QwikLogo />
          </a>
        </div>
        <div>
          <ul class="menu menu-horizontal text-white bg-blue-500">
            <li>
              <a>
                More
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                </svg>
              </a>
              <ul class="p-2 bg-blue-500">
                <li>
                  <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
                    Tutorials
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
});
