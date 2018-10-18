import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ConfigurationPage from './components/configuration/ConfigurationPage';
import ExecutionPage from './components/execution/ExecutionPage';
import ConfigEditPage from './components/configuration/configEditPage';
import EmailAliasesPage from './components/configuration/emailAliasePage';
import ProcessStatusEditPage from './components/configuration/processStatusEditPage';
import RepoTypePage from './components/configuration/repoTypeEditPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ConfigurationPage} />
        <Route path="execution" component={ExecutionPage} />
        <Route path="config.jsonedit" component={ConfigEditPage} />
        <Route path="emailAliases.jsonedit" component={EmailAliasesPage} />
        <Route path="processStatus.jsonedit" component={ProcessStatusEditPage} />
    </Route>
);
