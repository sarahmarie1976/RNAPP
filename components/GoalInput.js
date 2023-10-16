import { useState } from 'react';
import { 
  View, 
  TextInput, 
  Button, 
  StyleSheet, 
  Modal, 
  Image 
} from 'react-native';


function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }


  return (
    <Modal visible={props.visible} animationType='slide' >
      <View style={styles.inputContainer}>
      
        <Image
          style={styles.image}
          source={require("../assets/assets/sarama.png")}
          
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer} >
          <View style={styles.button} >
            <Button 
              title='Cancel' 
              onPress={props.onCancel} 
              color='#573141'
            />
          </View>
          <View style={styles.button} >
            <Button 
              title="Add Goal" 
              onPress={addGoalHandler} 
              color='#9d5977'
            /> 
          </View> 
          </View>
      </View>
        
    </Modal>
  );
}


export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 18,
        backgroundColor: '#edcdc2'
      },
      image: {
        width: 200,
        height: 200,
        margin: 10,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#9d5977',
        backgroundColor: '#eed2c8',
        color: '#5e524d',
        borderRadius: 6,
        width: '100%',
        padding: 12,
        fontSize: 18,
      },
      buttonContainer: {
        marginTop: 18,
        flexDirection: 'row',
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      }
    
})