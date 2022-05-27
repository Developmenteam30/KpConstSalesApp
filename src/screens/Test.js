import React, {useState} from 'react';
import {Button} from 'react-native';
// import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export default () => {
  const [birthDate, setbirthDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const date = moment(birthDate).format('L');
  console.log(date);
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setOpen(false);
    setbirthDate(currentDate);
  };
  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DateTimePicker
        mode="date"
        value={birthDate}
        onChange={onChangeDate}
        maximumDate={new Date()}
        minimumDate={new Date(1950, 0, 1)}
      />
    </>
  );
};
