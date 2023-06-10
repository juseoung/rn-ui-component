import { Text, Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { DEFAULT_STYLES } from "./styles";

type Props = {
  onPress?: () => void;
};

const Button = ({ onPress }: Props) => {
  const scale = useSharedValue(1);

  const config = {
    duration: 160,
  };

  const pressInHandler = () => {
    scale.value = 0.98;
  };

  const pressOutHandler = () => {
    scale.value = 1;
  };

  const animatedStyle = useAnimatedStyle(() => {
    const animatedScale = withTiming(scale.value, config);
    return {
      transform: [{ scale: animatedScale }],
    };
  });

  return (
    <Pressable
      onPress={onPress}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
    >
      <Animated.View style={[DEFAULT_STYLES.button, animatedStyle]}>
        <Text style={DEFAULT_STYLES.button__label}>Button</Text>
      </Animated.View>
    </Pressable>
  );
};

export default Button;
