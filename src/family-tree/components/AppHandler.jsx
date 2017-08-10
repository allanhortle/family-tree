/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Identity} from 'fronads';
import {selectEntityByType, selectEntityById} from 'enty';

import ErrorHandler from 'family-tree/components/ErrorHandler';
import MainPage from 'family-tree/components/MainPage';
import Tree from 'family-tree/components/Tree';
import Individual from 'family-tree/components/Individual';
import LoadingHock from 'family-tree/hock/LoadingHock';
import {CoreQueryHock} from 'family-tree/entity/EntityApi';

const TreeWithData = Identity(Tree)
    .map(connect(state => ({INDI: selectEntityByType(state, 'INDI')})))
    .value()

const IndividualWithData = Identity(Individual)
    .map(connect((state, {match}) => ({value: selectEntityById(state, 'INDI', match.params.pointer)})))
    .value()

function AppHandler(): React.Element<any> {
    return <BrowserRouter>
        <Route path="/" render={(props: Object): React.Element<any> =>{
            return <Switch>
                <Route exact path="/" component={TreeWithData} />
                <Route exact path="/individual/:pointer" component={IndividualWithData} />
            </Switch>;
        }}/>
    </BrowserRouter>;
};

export default Identity(AppHandler)
    .map(LoadingHock())
    .map(CoreQueryHock(() => ({})))
    .value()
