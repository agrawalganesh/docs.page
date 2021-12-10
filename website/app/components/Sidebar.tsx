import { Link, NavLink } from 'react-router-dom';
import cx from 'classnames';

const sidebar = [
  [
    'Welcome',
    [
      ['Overview', '/'],
      ['Contributors', '/contributors'],
      ['Changelog', '/changelog'],
      ['Migrating to 2.5', '/migrating-to-25'],
      ['Migrating to 2.0', '/migrating-to-20'],
    ],
  ],
  ['Getting Started', '/getting-started'],
  ['Declarative Routing', '/declarative-routing'],
  ['Navigation', '/navigation'],
  ['Parameters', '/parameters'],
  ['Sub-routes', '/sub-routes'],
  ['Redirection', '/redirection'],
  ['Named Routes', '/named-routes'],
  ['URL Path Strategy', '/url-path-strategy'],
  ['Debugging Your Routes', '/debugging'],
  ['Examples', '/examples'],
  ['Issues', '/issues'],
  [
    'Advanced Routing',
    [
      ['Transitions', '/transitions'],
      ['Async Data', '/async-data'],
      ['Nested Navigation', '/nested-navigation'],
      ['Navigator Builder', '/navigator-builder'],
      ['Navigator Integration', '/navigator-integration'],
      ['Type Routing Proposal', '/typed-routing'],
    ],
  ],
];

function removeTrailingSlash(path: string) {
  return path.replace(/\/$/, '');
}

export function Sidebar() {
  return (
    <nav>
      <ul className="text-sm text-gray-600">
        {sidebar.map(([title, urlOrChildren]) => {
          if (typeof urlOrChildren === 'string') {
            return (
              <li key={urlOrChildren}>
                <NavLink
                  end={urlOrChildren === '/'}
                  to={removeTrailingSlash(`/ehesp/testing${urlOrChildren}`)}
                  className={({ isActive }) =>
                    cx('block my-2', {
                      'hover:text-gray-800': !isActive,
                      'text-docs-theme font-medium border-docs-theme': isActive,
                    })
                  }
                >
                  {title}
                </NavLink>
              </li>
            );
          }

          return (
            <li className="mt-4 first:mt-0 mb-4">
              <h5 className="text-gray-900 font-semibold tracking-wide pb-3">{title}</h5>
              <ul className="border-l border-gray-100 dark:border-gray-800 space-y-2">
                {urlOrChildren.map(([title, url]) => (
                  <li key={url}>
                    <NavLink
                      end={url === '/'}
                      to={removeTrailingSlash(`/ehesp/testing${url}`)}
                      className={({ isActive }) =>
                        cx('pl-4 -ml-px border-l border-transparent', {
                          'hover:border-gray-400 hover:text-gray-800': !isActive,
                          'text-docs-theme font-medium border-docs-theme': isActive,
                        })
                      }
                    >
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
