import * as React from 'react';
import ProposalForm from './ProposalForm';
import {
    RouteComponentProps
} from 'react-router';

class StakeholderProjectProposal extends React.Component<RouteComponentProps<any>> {
    constructor(props: RouteComponentProps<any>) {
        super(props);
    }

    render() {
        return (
            <div>
            <ProposalForm projectId={this.props.match.params.projectId}/>
            </div>
        );
    }
}

export default StakeholderProjectProposal;
