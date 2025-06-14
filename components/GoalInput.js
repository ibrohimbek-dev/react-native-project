import { useState } from "react";
import {
	Button,
	Image,
	Modal,
	StyleSheet,
	TextInput,
	View,
} from "react-native";

function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	}

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/imgs/goal.png")}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Cancel" onPress={props.onCancel} color="#f31282" />
					</View>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} color="#5e0ecc" />
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#311b6b",
	},

	image: {
		width: 100,
		height: 100,
		margin: 20,
	},

	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		borderRadius: 8,
		color: "#120438",
		width: "100%",
		padding: 8,
	},

	buttonContainer: {
		flexDirection: "row",
		marginTop: 10,
	},

	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
