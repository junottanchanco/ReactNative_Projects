import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Moment from 'moment';
import { Header, Card, CardSection, Button, Input } from './components/common';
import Activity from './components/Activity';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activity: '',
            activityArray:[] 
        };
    }
    

    renderContent() {
        var newDate = Moment().format('[Today is:] dddd MMMM D[, ] YYYY');
        let activities = this.state.activityArray.map((val, key) => {
            return <Activity key={key} keyval={key} val={val}
                    deleteMethod={ ()=> this.deleteActivity(key) } />
        });
        
        return (
            <Card>
                <CardSection>
                    <View>
                        <Text>
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
                        
                <CardSection>
                    <Button onPress={ this.addActivity.bind(this) }>
                        Add
                    </Button>
                </CardSection>
                <CardSection>
                    <ScrollView style={styles.scrollView}>
                        {activities}
                    </ScrollView>
                </CardSection>
            </Card>
        );
    };

    addActivity(){
        if (this.state.activity) {

            var d = new Date();
            this.state.activityArray.push({
                'date': d.getFullYear() +
                "/" + (d.getMonth() + 1) +
                "/" + d.getDate(),
                'activity': this.state.activity
            });
            this.setState({ activityArray: this.state.activityArray })
            this.setState({ activity: '' });
        }
    }

    deleteActivity(key) {
        this.state.activityArray.splice(key, 1);
        this.setState({ activityArray: this.state.activityArray })
    }
    render() {
        return (
            <View>
                <Header headerText='To Do List' />
                <ScrollView>
                    {this.renderContent()}
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    scrollView: {
        paddingBottom: 57
    }
};

export default App;