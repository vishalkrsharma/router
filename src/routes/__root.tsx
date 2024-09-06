import * as React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

const TanStackRouterDevtools =
  import.meta.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <ul>
        <li>
          <Link
            to='/'
            activeProps={{
              style: {
                fontWeight: 'bold',
              },
            }}
          >
            {({ isActive }) => <>{isActive && '~'}Home</>}
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            activeProps={{
              style: {
                fontWeight: 'bold',
              },
            }}
          >
            {({ isActive }) => <>{isActive && '~'}About</>}
          </Link>
        </li>
        <li>
          <Link
            to='/pokemon'
            activeProps={{
              style: {
                fontWeight: 'bold',
              },
            }}
          >
            {({ isActive }) => <>{isActive && '~'}Pokemon</>}
          </Link>
        </li>
        <li>
          <Link
            to='/search'
            search={{
              query: 'toys',
              hasDiscount: true,
              categories: ['electronics', 'clothing'],
            }}
          >
            {({ isActive }) => <>{isActive && '~'}Search</>}
          </Link>
        </li>
      </ul>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  ),
});
