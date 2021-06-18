import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    paddingTop: '25%',
  },
  title: {
    color: 'white',
    fontSize: 30,
    margin: 10,
    marginBottom: '10%',
  },
  buttonContainer: {
    marginTop: 25,
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: '5%',
  },
  buttonText: {
    color: 'black',
    fontSize: 11,
    margin: 10,
  },
  text: {
    color: 'white',
    fontSize: 11,
    margin: 10,
  },
  textInput: {
    height: 40,
    borderStyle: 'solid',
    borderColor: 'white',
    color: 'white',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 5,
    width: '70%',
  },
  image: {
    width: 200,
    height: 200,
  },
  error: {
    color: 'red',
    fontSize: 11,
    margin: 10,
  },
});
