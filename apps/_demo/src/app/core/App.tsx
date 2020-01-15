import './App.css';

import React, { Component, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, IModuleStore } from 'redux-dynamic-modules-core';
import { getSagaExtension } from 'redux-dynamic-modules-saga';

// import { TapDiagnosticsLog } from '@nx-ie11-test/diagnostics';
import { getAuthModule } from '@nx-ie11-test/domains';

// import { Heading, Page, Spinner, TakaheThemeProvider } from '@nx-ie11-test/ui-core';
import { LoginButton } from '../features/login/components';
import LoginModuleIndex from '../features/login/pages/login';

// Lazy load entry component for patient module
const PatientModuleIndex: any = lazy(() => import('../features/patient/pages/landing'));

// const log = new TapDiagnosticsLog();
// log.info('Application bootstrapping...');

class App extends Component {
    private store: IModuleStore<any>;
    constructor(props: any, context: any) {
        super(props, context);
        this.store = createStore({ extensions: [getSagaExtension()] }, ...getAuthModule());
    }
    render(): React.ReactNode {
        return (
            // Providing Fannypack theme around the app
            <React.Fragment>
                {/* Providing store access to the whole app */}
                <Provider store={this.store}>
                    {/* Router outlet */}
                    <Router>
                        <div>
                            <h1>
                                I&apos;m a test application!
                            </h1>
                            {/* Individual routes are injected here and wrapped by <Suspense> to provide loading state */}
                            <Suspense fallback={<p>Loading...</p>}>
                                {/* /Patients route */}
                                <Route exact path="/patients">
                                    <PatientModuleIndex />
                                </Route>
                                <Route exact path="/login">
                                    <LoginModuleIndex />
                                </Route>
                                {/* Default route to login (temporary) */}
                                <Route exact path="/">
                                    <h3>
                                        The home page,
                                        <br />I presume
                                    </h3>
                                </Route>
                            </Suspense>
                        </div>
                        <div className="footer">
                            <LoginButton />
                        </div>
                    </Router>
                </Provider>
            </React.Fragment>
        );
    }
}

export default App;
