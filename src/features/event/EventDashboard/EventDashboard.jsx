import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const mapState = state => ({
	events: state.events,
	loading: state.async.loading
});

class EventDashboard extends Component {

	handleDeleteEvent = id => {
		this.setState(({ events }) => ({
			events: events.filter(e => e.id !== id)
		}));
	};

	render() {
		const { events, loading } = this.props;
		if (loading) return <LoadingComponent />
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList events={events} deleteEvent={this.handleDeleteEvent} />
				</Grid.Column>
				<Grid.Column width={6}>
					<h2>Activity feed</h2>
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect(mapState)(EventDashboard);
