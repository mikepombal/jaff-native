import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	back: {
		margin: 10,
		fontSize: 20
	}
});

export default class AddAirportsContainer extends Component {
	static propTypes = {
		onNavigate: PropTypes.func.isRequired
	};

	handleBack = () => {
		const { onNavigate } = this.props;
		onNavigate({ type: 'pop' });
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.back}>Show here the list of airports</Text>
				<TouchableOpacity onPress={this.handleBack}>
					<Text style={styles.back}>Back</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
