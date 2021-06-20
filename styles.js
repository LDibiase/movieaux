import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: '10%',
  },
  header: {
    position: 'absolute',
    top: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexWrap: 'wrap',
  },
  title: {
    margin: 10,
    marginBottom: '5%',
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
  },
  longButton: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 25,
    margin: '5%',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlignVertical: 'center',
    margin: 10,
  },
  longButtonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    margin: 5,
  },
  text: {
    color: 'white',
    fontSize: 14,
    margin: 5,
  },
  textInput: {
    width: '70%',
    height: 40,
    color: 'white',
    margin: 10,
    padding: 5,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  logo: {
    width: '70%',
    height: 175,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  logoSmall: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 50,
  },
  thumbnail: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  image: {
    width: 300,
    height: 275,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  label: {
    width: '70%',
    color: 'white',
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'left',
    padding: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    margin: 10,
  },
});
