/* @flow */
import {List} from 'immutable';
import BaseRecord from 'family-tree/entity/BaseRecord';

export default class FamilyRecord extends BaseRecord({
    data: null,
    pointer: null,
    tag: null,
    tree: null,
    HUSB: null,
    WIFE: null,
    MARR: null,
    CHIL: List()
}) {
}
