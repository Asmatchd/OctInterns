/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppBtn, AppInput, Bar, ElementsNavHeader} from '../../components';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import {primaryColor, secondaryColor} from '../Dimen';

export class LearnCalender extends React.Component {
  state = {
    date: '',
    dateSelected: false,

    finalDates: {},
    markedDates: ['2020-12-13', '2020-12-14', '2020-12-15', '2020-12-16'],
  };

  componentDidMount = () => {
    this.mark();
  };

  mark = () => {
    const nextDays = this.state.markedDates;

    let newDaysObject = [];

    nextDays.forEach((day) => {
      newDaysObject = {
        ...newDaysObject,
        [day]: {
          marked: true,
        },
      };
    });

    newDaysObject = {
      ...newDaysObject,
      [this.state.date]: {
        selected: true,
        marked: true,
      },
    };

    this.setState({finalDates: newDaysObject}, () => {});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Bar />
        <ElementsNavHeader
          title={'Calendar'}
          leftIc={'options-outline'}
          leftIcType={'ionicon'}
          leftIcPressed={() => this.props.navigation.goBack()}
        />
        <Calendar
          onDayPress={(day) => {
            // console.warn(moment(day.dateString).format('DD-MM-YYYY'));
            this.setState(
              {
                date: day.dateString,
                dateSelected: true,
              },
              () => {
                this.mark(this.state.markedDates);
              },
            );
          }}
          // markedDates={{
          //   [this.state.date]: {selected: true, marked: true},
          // }}
          markedDates={this.state.finalDates}
          current={this.state.date}
          //   minDate={moment(new Date() - 1).format('YYYY-MM-DD')}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: secondaryColor,
            selectedDayBackgroundColor: secondaryColor,
            selectedDayTextColor: 'white',
            todayTextColor: secondaryColor,
            // todayBackgroundColor: this.state.todayBg,

            dayTextColor: 'black',
            textDisabledColor: '#d9e1e8',
            dotColor: 'red',
            selectedDotColor: '#000',
            arrowColor: primaryColor,
            monthTextColor: secondaryColor,
            textDayFontSize: 14,
            textMonthFontSize: 12,
            textDayHeaderFontSize: 12,
          }}
        />
      </View>
    );
  }
}
