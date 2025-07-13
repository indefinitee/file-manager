
// @/app/routing
import { createHistoryRouter } from 'atomic-router';
import { createBrowserHistory } from 'history';

import { homeRoute } from './pages/home/HomePage';

// 1. Define routes
const routes = [
  { path: '/', route: homeRoute },
];

// 2. Create router
const router = createHistoryRouter({
  routes: routes,
});

// 3. Create history
const history = createBrowserHistory();

// 4. Attach it to router
router.setHistory(history);
