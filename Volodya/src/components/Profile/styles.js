import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  photo: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
  },
  text: {
    fontWeight: 'bold',
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    marginTop: 50,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    color: 'white',
  },
});

export default styles;
