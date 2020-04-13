import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';

const mapState = state => ({
	events: state.events
});

class EventDashboard extends Component {

	handleDeleteEvent = id => {
		this.setState(({ events }) => ({
			events: events.filter(e => e.id !== id)
		}));
	};

	render() {
		const { events } = this.props;
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
