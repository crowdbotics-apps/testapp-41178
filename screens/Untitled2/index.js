import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Formik } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

const SignUpForm = () => {
  const [date, setDate] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return <Formik initialValues={{
    email: "",
    firstName: "",
    lastName: "",
    dateOfBirth: date,
    gender: "",
    password: "",
    confirmPassword: ""
  }} onSubmit={values => console.log(values)}>
      {({
      handleChange,
      handleBlur,
      handleSubmit,
      values
    }) => <View>
          <Text>Email</Text>
          <TextInput onChangeText={handleChange("email")} onBlur={handleBlur("email")} value={values.email} />
          <Text>First Name</Text>
          <TextInput onChangeText={handleChange("firstName")} onBlur={handleBlur("firstName")} value={values.firstName} />
          <Text>Last Name</Text>
          <TextInput onChangeText={handleChange("lastName")} onBlur={handleBlur("lastName")} value={values.lastName} />
          <Text>Date of Birth</Text>
          <Button title={date.toLocaleDateString()} onPress={() => setShowDatePicker(true)} />
          {showDatePicker && <DateTimePicker value={date} mode="date" display="default" onChange={handleDateChange} />}
          <Text>Gender</Text>
          <Picker selectedValue={values.gender} onValueChange={handleChange("gender")}>
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Others" value="others" />
          </Picker>
          <Text>Password</Text>
          <TextInput secureTextEntry onChangeText={handleChange("password")} onBlur={handleBlur("password")} value={values.password} />
          <Text>Confirm Password</Text>
          <TextInput secureTextEntry onChangeText={handleChange("confirmPassword")} onBlur={handleBlur("confirmPassword")} value={values.confirmPassword} />
          <Button onPress={handleSubmit} title="Submit" />
        </View>}
    </Formik>;
};

export default SignUpForm;