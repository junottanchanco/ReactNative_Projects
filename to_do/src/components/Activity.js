import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class Activity extends Component {
    render(){
        return(
            <View key={this.props.keyval} style={styles.activity}>

                <Text style={styles.activityText}>{this.props.val.date}</Text>
                <Text style={styles.activityText}>{this.props.val.activity}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.activityDelete}>
                    <Text style={styles.activityDeleteText}>Delete</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = {
    activity: {
        position: 'relative',
        padding: 20,
        paddingRight: 220,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    activityText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    activityDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10, 
        top: 10,
        bottom: 10,
        right: 10,
    },
    activityDeleteText: {
        color: 'white',
    }
}

export default Activity;