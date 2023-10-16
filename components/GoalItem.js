import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: '#ffe6ee' }}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
    );
  }
export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#9d5977',
      },
      pressedItem: {
        opacity: 1
      },
      goalText: {
        color: 'whitesmoke',
        padding: 8,
        fontSize: 18,
      },
})
//android_ripple={{color:'#ffe6ee'}} 