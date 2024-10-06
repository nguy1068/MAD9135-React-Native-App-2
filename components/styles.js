import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 24,
    paddingBottom: 16,
  },
  userItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexDirection: Platform.OS === 'ios' ? 'row-reverse' : 'row',
    padding: 16,
  },
  borderLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 16, 
  },
  userInfo: {
    margin: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
});

export default styles;
