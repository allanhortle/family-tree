/* @flow */

import {Record, fromJS, Map, List} from 'immutable';

function recurseTree(rr, ii) {
    const {tag, data, tree} = ii;
    // console.log(tree);
    if(tag === 'CHIL') {
        return rr.updateIn([tag], cc => cc.push(data))
    }
    if(tag === 'DEAT') {
        return rr.set(tag, tree.reduce(recurseTree, Map()));
    }
    if(tree.length && data.length === 0) {
        return rr.set(tag, tree.reduce(recurseTree, Map()));
    }
    return rr.set(tag, data);
}

export default (defaultProps: Object) => class extends Record(defaultProps) {
    constructor(props: Object): Record<*> {
        super(fromJS(props));
        return props.tree.reduce(recurseTree, this);
    }
};
