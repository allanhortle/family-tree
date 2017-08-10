/* @flow */
import {Map} from 'immutable';
import BaseRecord from 'family-tree/entity/BaseRecord';

export default class NoteRecord extends BaseRecord({
    data: null,
    pointer: null,
    tag: null,
    tree: null,
    CONC: null,
    CONT: null,
    // MARR: null,
    // CHIL: null
}) {
}
