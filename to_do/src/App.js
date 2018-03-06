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
                    <Text style={styles.dateStyle}>
                        {newDate}
                    </Text>
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
    }

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
    dateStyle: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
};

export default App;