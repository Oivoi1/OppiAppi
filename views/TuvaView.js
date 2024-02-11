import {StyleSheet,Text,View,TouchableOpacity,ScrollView,SafeAreaView} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { NUMERIC } from "../data/data";

// <----- COMPONENTS -----> //
import Counter from "../components/Counter";
import CustomModalButton from "../components/CustomModalButton";

// <----- DATA -----> //
import {STRINGS,TUVA_DATA,ICONS_SVG,TUVA_STORAGE_KEY,THEME} from "../data/data";

// <----- FUNCTIONS -----> //
import { onPressOpenLink } from "../utils/GeneralFunctions";

// <----- UTILS -----> //
import {handleSetTrophiesAdd, handleSetTrophiesSubstract} from "../utils/HeaderStateFunctions";
import { AppHeaderContext } from "../utils/GeneralFunctions";
import {getDataFromStorage,saveDataToStorage} from "../utils/GeneralFunctions/";
import { ThemeProvider } from "@react-navigation/native";
import CompetenceGoalsView from "./CompetenceGoalsView";

const SCREEN_PADDING = 10

export default function TuvaView({navigation}) {
  //global-state from App.js
  const { trophies, setTrophies } = useContext(AppHeaderContext);

  // <---state variables---> //
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleIntro, setIsModalVisibleIntro] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [modalWeeks, setModalWeeks] = useState(0);
  //this is array from counter's states and ids and is used to hold and load data from storage.
  const [stateToStorage, setStateToStorage] = useState([]);
  const [showModalDetailFromFirst, setShowModalDetailFromFirst] =
    useState(false);
  const [showModalDetailFromSecond, setShowModalDetailFromSecond] =
    useState(false);
  const [showModalDetailFromThird, setShowModalDetailFromThird] =
    useState(false);
  const [showModalDetailFromFourth, setShowModalDetailFromFourth] =
    useState(false);
  const [showModalDetailFromFifth, setShowModalDetailFromFifth] =
    useState(false);
  const [showModalDetailFromSixth, setShowModalDetailFromSixth] =
    useState(false);
  const [showModalDetailFromSeventh, setShowModalDetailFromSeventh] =
    useState(false);

  //load showmodaldetailsfrom variables from phone memory
  useEffect(() => {
    const fetchData = async () => {
      //AsyncStorage.clear() //don't use this!
      let data = await getDataFromStorage(TUVA_STORAGE_KEY);
      //console.log( data)

      //init asyncstorage for first time
      if (data.length <= 0) {
        let tempModalDetailArray = [];
        tempModalDetailArray.push(
          { ...showModalDetailFromFirst },
          { ...showModalDetailFromSecond },
          { ...showModalDetailFromThird },
          { ...showModalDetailFromFourth },
          { ...showModalDetailFromFifth },
          { ...showModalDetailFromSixth },
          { ...showModalDetailFromSeventh }
        );
        saveDataToStorage(TUVA_STORAGE_KEY, tempModalDetailArray);
      }
      //otherwise there should be data => set data
      else {
        setShowModalDetailFromFirst(data[0]);
        setShowModalDetailFromSecond(data[1]);
        setShowModalDetailFromThird(data[2]);
        setShowModalDetailFromFourth(data[3]);
        setShowModalDetailFromFifth(data[4]);
        setShowModalDetailFromSixth(data[5]);
        setShowModalDetailFromSeventh(data[6]);
      }
    };
    fetchData();
  }, []);

  const BackButton = ( { onPress } ) => {
    return (
      <TouchableOpacity
        style={ styles.customButton }
        activeOpacity={ NUMERIC.opacityTouchFade }
        onPress={ onPress }
      >
        <ICONS_SVG.backArrowSvg />
      </TouchableOpacity>
    )
  }

  const handleModalOpen = (index) => {
    //changed index to match data's id because id from data starts from 1
    const newIndex = index + 1;
    //current index to counter
    setClickedIndex(newIndex);
    setIsModalVisible(!isModalVisible);
  };
  //this should be obvious
  const handleModalClose = () => {
    setIsModalVisible(!isModalVisible);
  };
  /*handle toggle course done or not and add to trophies 
if course done or substract from trophies
handle asyncstorage state saving also */
  const handleModalButtonPress = (index, itemId) => {
    let tempModalDetailArray = [];
    tempModalDetailArray.push(
      { ...showModalDetailFromFirst },
      { ...showModalDetailFromSecond },
      { ...showModalDetailFromThird },
      { ...showModalDetailFromFourth },
      { ...showModalDetailFromFifth },
      { ...showModalDetailFromSixth },
      { ...showModalDetailFromSeventh }
    );
    //switch-case for different elements
    switch (itemId) {
      case 1:
        setShowModalDetailFromFirst((prevState) => ({
          ...showModalDetailFromFirst,
          [index]: !prevState[index],
        }));
        !showModalDetailFromFirst[index]
          ? handleSetTrophiesAdd(setTrophies, trophies)
          : null;
        showModalDetailFromFirst[index]
          ? handleSetTrophiesSubstract(setTrophies, trophies)
          : null;
        tempModalDetailArray[0] = {
          ...showModalDetailFromFirst,
          [index]: !showModalDetailFromFirst[index],
        };

        break;
      case 2:
        setShowModalDetailFromSecond((prevState) => ({
          ...showModalDetailFromSecond,
          [index]: !prevState[index],
        }));
        !showModalDetailFromSecond[index]
          ? handleSetTrophiesAdd(setTrophies, trophies)
          : null;
        showModalDetailFromSecond[index]
          ? handleSetTrophiesSubstract(setTrophies, trophies)
          : null;
        tempModalDetailArray[1] = {
          ...showModalDetailFromSecond,
          [index]: !showModalDetailFromSecond[index],
        };

        break;
      case 3:
        setShowModalDetailFromThird((prevState) => ({
          ...showModalDetailFromThird,
          [index]: !prevState[index],
        }));
        !showModalDetailFromThird[index]
          ? handleSetTrophiesAdd(setTrophies, trophies)
          : null;
        showModalDetailFromThird[index]
          ? handleSetTrophiesSubstract(setTrophies, trophies)
          : null;
        tempModalDetailArray[2] = {
          ...showModalDetailFromThird,
          [index]: !showModalDetailFromThird[index],
        };

        break;
      case 4:
        setShowModalDetailFromFourth((prevState) => ({
          ...showModalDetailFromFourth,
          [index]: !prevState[index],
        }));
        !showModalDetailFromFourth[index]
          ? handleSetTrophiesAdd(setTrophies, trophies)
          : null;
        showModalDetailFromFourth[index]
          ? handleSetTrophiesSubstract(setTrophies, trophies)
          : null;
        tempModalDetailArray[3] = {
          ...showModalDetailFromFourth,
          [index]: !showModalDetailFromFourth[index],
        };

        break;
      case 5:
        setShowModalDetailFromFifth((prevState) => ({
          ...showModalDetailFromFifth,
          [index]: !prevState[index],
        }));
        !showModalDetailFromFifth[index]
          ? handleSetTrophiesAdd(setTrophies, trophies)
          : null;
        showModalDetailFromFifth[index]
          ? handleSetTrophiesSubstract(setTrophies, trophies)
          : null;
        tempModalDetailArray[4] = {
          ...showModalDetailFromFifth,
          [index]: !showModalDetailFromFifth[index],
        };

        break;
      case 6:
        setShowModalDetailFromSixth((prevState) => ({
          ...showModalDetailFromSixth,
          [index]: !prevState[index],
        }));
        !showModalDetailFromSixth[index]
          ? handleSetTrophiesAdd(setTrophies, trophies)
          : null;
        showModalDetailFromSixth[index]
          ? handleSetTrophiesSubstract(setTrophies, trophies)
          : null;
        tempModalDetailArray[5] = {
          ...showModalDetailFromSixth,
          [index]: !showModalDetailFromSixth[index],
        };

        break;
      case 7:
        setShowModalDetailFromSeventh((prevState) => ({
          ...showModalDetailFromSeventh,
          [index]: !prevState[index],
        }));
        !showModalDetailFromSeventh[index]
          ? handleSetTrophiesAdd(setTrophies, trophies)
          : null;
        showModalDetailFromSeventh[index]
          ? handleSetTrophiesSubstract(setTrophies, trophies)
          : null;
        tempModalDetailArray[6] = {
          ...showModalDetailFromSeventh,
          [index]: !showModalDetailFromSeventh[index],
        };

        break;

      default:
        if (itemId === null || itemId === undefined) {
          throw new Error();
        }
    }
    saveDataToStorage(TUVA_STORAGE_KEY, tempModalDetailArray);
  };
  //Renders modals buttons for course complition
  const ModalDetailsCheckbox = ({ index }) => {
    const itemId = clickedIndex;
    let imgSource = null;
    let iconBgColor = THEME.lightBackground;
    const checked = <Ionicons name="trophy" size={32} color="gold" />;
    const unchecked = <Ionicons name="trophy-outline" size={32} color={THEME.darkBlue} />;

    if (itemId === 1) {
      imgSource = showModalDetailFromFirst[index] ? (
        iconBgColor = THEME.darkBlue,
        checked
      ) : (
        unchecked
      );
    } else if (itemId === 2) {
      imgSource = showModalDetailFromSecond[index] ? (
        iconBgColor = THEME.darkBlue,
        checked
      ) : (
        unchecked
      );
    } else if (itemId === 3) {
      imgSource = showModalDetailFromThird[index] ? (
        iconBgColor = THEME.darkBlue,
        checked
      ) : (
        unchecked
      );
    } else if (itemId === 4) {
      imgSource = showModalDetailFromFourth[index] ? (
        iconBgColor = THEME.darkBlue,
        checked
      ) : (
        unchecked
      );
    } else if (itemId === 5) {
      imgSource = showModalDetailFromFifth[index] ? (
        iconBgColor = THEME.darkBlue,
        checked
      ) : (
        unchecked
      );
    } else if (itemId === 6) {
      imgSource = showModalDetailFromSixth[index] ? (
        iconBgColor = THEME.darkBlue,
        checked
      ) : (
        unchecked
      );
    } else if (itemId === 7) {
      imgSource = showModalDetailFromSeventh[index] ? (
        iconBgColor = THEME.darkBlue,
        checked
      ) : (
        unchecked
      );
    }

    return (
      <TouchableOpacity
      style={{
        ...styles.checkTaskButton,
        backgroundColor: iconBgColor, 
      }}
      onPress={() => handleModalButtonPress(index, itemId)}
    >
      {imgSource}
    </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {(isModalVisible || isModalVisibleIntro) && <View style={styles.overlay} />}
      <SafeAreaView>
          <View style={styles.viewContainer}>
            <View style={styles.tuvaTitle}>
              <BackButton
                onPress={ () => navigation.navigate('MainView') }
              />
              {STRINGS.map((item, index) => (
              <Text key={index} style={[styles.heading, {marginLeft: 10, marginBottom: 0, flex: 1}]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}
              >
                {item.tuvaHeading}
              </Text>
              ))}
              <TouchableOpacity
              style={ styles.customButton }
              onPress={() => {
                setIsModalVisibleIntro(!isModalVisibleIntro);
              }}
              >
                <ICONS_SVG.infoSvg/>
              </TouchableOpacity>
            </View>


            <Modal
              style={styles.modalContainerInfo}
              //Modal for general info
              animationType="fade"
              visible={isModalVisibleIntro}
            >
              {STRINGS.map((item, index) => (
                <Text key={index} style={styles.instructions}>
                  {item.tuvaInstructions}
                </Text>
              ))}
              <CustomModalButton
                onPress={() => setIsModalVisibleIntro(!isModalVisibleIntro)}
              />
            </Modal>

            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 50, paddingTop: 10 }}>
            {TUVA_DATA.map((item, index) => (
              <View style={ styles.itemContainer } key={item.id}>
                <TouchableOpacity onPress={() => onPressOpenLink(item.url)}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemScope}>{item.scope}</Text>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                  <Counter
                    initValue={item.initValue}
                    maxValue={item.maxValue}
                    itemId={item.id}
                    setModalWeeks={setModalWeeks}
                    clickedIndex={clickedIndex}
                    stateToStorage={stateToStorage}
                    setStateToStorage={setStateToStorage}
                  />
                  <TouchableOpacity
                    style={styles.iconHelp}
                    onPress={() => {
                      handleModalOpen(index);
                    }}
                  >
                    <Ionicons name="trophy-outline" size={28} color="#023B5D" />
                  </TouchableOpacity>
                </View>
                  <TouchableOpacity onPress={() => navigation.navigate('CompetenceGoalsView', {detailsIndex: index+1})}>
                  <View style={styles.goalsButtonContainer}>
                    <Text style={styles.goalsButtonLabel}>TAVOITTEET</Text>
                  </View>
                  </TouchableOpacity>
                  <View style={styles.goalsCounterContainer}>
                    <Text style={styles.goalsCounterText}>0/0</Text>
                  </View>
              </View>
            ))}

            <Modal
              style={styles.modalContainer}
              animationType="fade"
              visible={isModalVisible}
            >
              <View style={{ flex: 1 }}>
                {STRINGS.map((item, index) => (
                  <Text key={index} style={styles.instructions}>
                    {item.tuvaInstructionsForCourseComplete}
                  </Text>
                ))}
                <ScrollView 
                  contentContainerStyle={styles.checkTaskContainer} 
                  showsVerticalScrollIndicator={true}
                >
                  {Array(modalWeeks)
                    .fill(<ModalDetailsCheckbox />)
                    .map((_, index) => (
                      <ModalDetailsCheckbox key={index} index={index} />
                    ))}
                </ScrollView>
              </View>
              <CustomModalButton onPress={() => handleModalClose()} />
            </Modal>
            </ScrollView>
          </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.lightBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "Bold",
    fontSize: 24,
    color: THEME.darkBlue,
    textAlign: 'center',
    paddingHorizontal: 5,
    textAlignVertical: 'center'
  },
  viewContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: SCREEN_PADDING,
    paddingTop: 0
  },
  boxContainer: {
    width: "100%",
    height: "100%",
  },

  itemContainer: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 15,
    borderColor: THEME.darkBlue,
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    elevation: 8,
    backgroundColor: THEME.white,
  },

  itemTitle: {
    fontSize: 18,
    fontFamily: "Bold",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    textAlign: "center",
    textDecorationLine: "underline"
  },
  itemScope: {
    fontSize: 16,
    fontFamily: "Regular",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    alignSelf: "center",
  },

  instructions: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: "Regular",
  },
  iconHelp: {
    alignItems: "center",
    borderRadius: 40,
    borderWidth: 2.5,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignSelf: "flex-end",
    position: "absolute",
    top: "20%",
    right: 0,
    borderColor: THEME.darkBlue,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  modalContainer: {
    backgroundColor: THEME.white,
    width: "90%",
    height: "55%",
    padding: 40,
    borderRadius: 20,
    borderColor: THEME.darkBlue,
    borderWidth: 3,
    fontFamily: "Regular",
    alignSelf: "center",
    position: "absolute",
    top: "15%",
  },
  modalContainerInfo: {
    backgroundColor: THEME.white,
    width: "90%",
    height: "40%",
    padding: 40,
    borderRadius: 20,
    borderColor: THEME.darkBlue,
    borderWidth: 3,
    alignSelf: "center",
    fontFamily: "Regular",
    position: "absolute",
    top: "15%",
  },
  checkTaskContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "auto",
    width: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 10,
  },
  checkTaskButton: {
    alignItems: "center",
    padding: 5,
    backgroundColor: THEME.lightBackground,
    borderRadius: 50,
    borderColor: THEME.darkBlue,
    borderWidth: 2,
    margin: 5,
  },
  checkTaskImg: {
    height: 30,
    width: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    zIndex: 1, 
  },
  tuvaTitle: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: THEME.lightBackground,
    alignItems: 'center'
  },
  customButton: {
    alignItems: 'center',
    fontWeight: 'bold',
    height: 40,
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 5,
    width: 40,
  },
  goalsButtonLabel: {
    fontFamily: "Bold",
    color: THEME.darkBlue,
    fontSize: 18,
  },
  goalsButtonContainer: {
    padding: 5,
    borderRadius: 100,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: THEME.darkBlue,
    marginTop: 10,
    alignItems: "center",
    alignSelf: 'center',
    width: '60%'
  },
  goalsCounterText: {
    fontFamily: "Bold",
    color: THEME.darkBlue,
    fontSize: 16,
  },
  goalsCounterContainer: {
    padding: 2,
    borderBottomStartRadius: 18,
    borderBottomEndRadius: 18,
    backgroundColor: 'white',
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: THEME.darkBlue,
    marginBottom: 5,
    alignItems: "center",
    alignSelf: 'center',
    width: '25%'
  },
});
