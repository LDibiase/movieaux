import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: '25%',
    paddingBottom: '10%',
  },
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexWrap: 'wrap',
  },
  title: {
    color: 'white',
    fontSize: 30,
    margin: 10,
    marginBottom: '10%',
  },
  button: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
  },
  longButton: {
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
  thumbnail: {
    width: 150,
    height: 150,
  },
  image: {
    width: 300,
    height: 300,
  },
  error: {
    color: 'red',
    fontSize: 11,
    margin: 10,
  },
});
