import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ConfigurationPage from './components/configuration/ConfigurationPage';
import ExecutionPage from './components/execution/ExecutionPage';
import ConfigEditPage from './components/configuration/configEditPage';
import EmailAliasesPage from './components/configuration/emailAliasePage';
import ProcessStatusEditPage from './components/configuration/processStatusEditPage';
import RepoTypeEditPage from './components/configuration/repoTypeEditPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ConfigurationPage} />
        <Route path="execution" component={ExecutionPage} />
        <Route path="configedit" component={ConfigEditPage} />
        <Route path="emailaliasesedit" component={EmailAliasesPage} />
        <Route path="processstatusedit" component={ProcessStatusEditPage} />
        <Route path="repotypeedit" component={RepoTypeEditPage} />
    </Route>
);
