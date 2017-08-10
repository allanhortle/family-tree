/* @flow */

import {
    ObjectSchema as object,
    ArraySchema as array,
    EntitySchema as entity,
    DynamicSchema as dynamic,
    ValueSchema as value,
} from 'enty';

import IndividualRecord from './IndividualRecord';
import FamilyRecord from './FamilyRecord';
import NoteRecord from './NoteRecord';


function treeEntity(id, Record) {
    return entity(id, {
        idAttribute: (data) => data.pointer,
        constructor: Record ? (data) => new Record(data.toObject()) : (data) => data
    });
}

const treeNode = dynamic();
const tree = array(treeNode);


const HEAD = treeEntity('HEAD');
const SUBN = treeEntity('SUBN');
const SUBM = treeEntity('SUBM');
const INDI = treeEntity('INDI', IndividualRecord);
const FAM = treeEntity('FAM', FamilyRecord);
const NOTE = treeEntity('NOTE', NoteRecord);
const TRLR = treeEntity('TRLR');

const NodeTypes = {
    HEAD,
    SUBN,
    INDI,
    FAM,
    NOTE,
    TRLR,
    SUBM
}

INDI.define(object({
   FAMS: value(FAM),
   FAMC: value(FAM)
}));

FAM.define(object({
   HUSB: value(INDI),
   WIFE: value(INDI),
   CHIL: array(value(INDI))
}));


treeNode.define(data => {
    const schema = NodeTypes[data.tag];
    if(!schema) {
        console.warn('no schema found for', data.tag);
        return object({});
    }
    return schema;
})

export default object({
    tree,
    INDI,
    FAM
});
