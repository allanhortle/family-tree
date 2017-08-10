/* @flow */

import React from 'react';
import {Link} from 'react-router-dom';
import {Text} from 'obtuse';


class Individual extends React.Component {
    render(): React.Element<any> {
        const {forename, surname, SEX, BIRTH, DEAT, FAMS, FAMC} = this.props.value;
        console.log(this.props.value)
        const spouse = FAMS && FAMS.get(SEX === 'M' ? 'WIFE' : 'HUSB')
        const father = this.props.value.getIn(['FAMC', 'HUSB']);
        const mother = this.props.value.getIn(['FAMC', 'WIFE']);
        return <div>
            <Text modifier="alpha">{forename} {surname}</Text>
            <table>
                <tbody>
                    <tr><td>Sex: </td><td>{SEX}</td></tr>
                    {spouse && <tr>
                        <td>Spouse: </td>
                        <td>
                            <Link to={`/individual/${spouse.pointer}`}>{spouse.forename} {spouse.surname}</Link>
                            <span> (Married: {FAMS.MARR.get('DATE')} {FAMS.MARR.get('PLAC')})</span>
                        </td>
                    </tr>}
                    {mother && <tr>
                        <td>Mother:</td>
                        <td><Link to={`/individual/${mother.pointer}`}>{mother.fullname}</Link></td>
                    </tr>}
                    {father && <tr>
                        <td>Father:</td>
                        <td><Link to={`/individual/${father.pointer}`}>{father.fullname}</Link></td>
                    </tr>}
                    {FAMC && FAMC.CHIL && <tr>
                        <td>Siblings: </td>
                        <td>{FAMC.CHIL.map(cc => <div>
                            <Link to={`/individual/${cc.pointer}`}>{cc.fullname}</Link>
                        </div>).toArray()}</td>
                    </tr>}
                    {FAMS && FAMS.CHIL && <tr>
                        <td>Children: </td>
                        <td>{FAMS.CHIL.map(cc => <div>
                            <Link to={`/individual/${cc.pointer}`}>{cc.fullname}</Link>
                        </div>).toArray()}</td>
                    </tr>}
                </tbody>
            </table>
        </div>;
    }
}


export default Individual;
