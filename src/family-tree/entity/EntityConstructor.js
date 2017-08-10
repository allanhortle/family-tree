/* @flow */
import {Record} from 'immutable';
import UserRecord from 'family-tree/entity/user/UserRecord';

export default function(value: Map<string, any>, key: string): Record<*> | Map<string, any> {
    switch(key) {
        case 'viewer':
            return new UserRecord(value);
        default:
            return value;
    }
}