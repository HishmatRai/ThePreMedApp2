import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  sideMenuContainer: {
    marginTop: -10,
    padding: 0,
    margin: 0,
    flex: 1,
  },
  _profile_container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e90ff",
    height: 230,
    marginBottom: 20,
    marginTop: -30,
  },

  _profile_view: {
    borderWidth: 1,
    height: 110,
    width: 110,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 50,
  },
  _copy_right: {
    fontSize: 8,
    marginTop: 1,
    padding: 10,
  },
  _user_name: {
    marginTop: 20,
    fontSize: 20,
    color:"white"
  },
});

export default styles;