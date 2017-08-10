/* @flow */
import {Map} from 'immutable';
import BaseRecord from 'family-tree/entity/BaseRecord';

export default class IndividualRecord extends BaseRecord({
    data: null,
    pointer: null,
    tag: null,
    tree: null,
    forename: null,
    fullname: null,
    surname: null,
    NAME: null,
    SEX: null,
    NOTE: null,
    DEAT: Map(),
    FAMS: Map(),
    FAMC: Map(),
    OBJE: null,
    CHR: null,
    _FPER: null,
    BIRT: Map()
}) {
    constructor(props) {
        super(props);

        const data = this.NAME.match(/(.*)\/(.*)\//) || [null, data];
        const [full, first, last] = data;
        return this
            .set('forename', `${first}`)
            .set('surname', last && last.charAt(0) + last.substr(1).toLowerCase())
            .update(ii => ii.set('fullname', `${ii.forename}${ii.surname}`))
    }
}
