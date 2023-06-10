import { View } from "react-native";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f1f1f1",
        padding: 8,
      }}
    >
      <Story />
    </View>
  ),
];
