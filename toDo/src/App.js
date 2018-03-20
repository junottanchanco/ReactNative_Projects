import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Moment from 'moment';
import { Header, Card, CardSection, Button, Input } from './components/common';


class App extends Component {
    state = { activity: '' };

    renderContent() {
        var newDate = Moment().format('[Today is:] dddd MMMM D[, ] YYYY');
        
        return (
            <Card>
                <CardSection>
                    <View style={styles.containerStyle}>
                        <Text style={styles.dateTextStyle}>
                            {newDate}
                        </Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Input 
                        label='Activity'
                        placeholder='ex. Study React Native'
                        value={this.state.activity}
                        onChangeText={activity => this.setState({ activity })}
                        underlineColorAndroid='transparent'
                    />
                </CardSection>
                    
                <CardSection />
    
                <CardSection>
                    <Button>
                        Add
                    </Button>
                </CardSection>
            </Card>
        );
    };

    render() {
        return (
            <View>
                <Header headerText='To Do List' />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    dateTextStyle: {
        fontSize: 15
    }
};

export default App;