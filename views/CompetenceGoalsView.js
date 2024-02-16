import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import { COMPETENCE_DATA, COMPETENCE_STORAGE_KEY, ICONS_SVG, THEME, NUMERIC } from '../data/data'
import { getDataFromStorage, saveDataToStorage, vibrateShort, showNotification } from '../utils/GeneralFunctions'
import { Ionicons, FontAwesome6 } from '@expo/vector-icons'
import { useRoute, useFocusEffect } from '@react-navigation/native'

const SCREEN_PADDING = 10
const INDICATOR_SIZE = 120

/**
 * Go back to previous page from details view
 */
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

/**
 * Candy like buttons CompetenceGoalsView
 */
const CompetenceIndicator = ( { top, left, item, tasks, onPress } ) => {
  const allCompleted =  tasks.every( task => task === true )
  const completedTasks = tasks.filter(task => task === true).length
  const totalTasks = tasks.length

  return (
    <TouchableOpacity
      style={ [ styles.button, { top: top, left: left } ] }
      activeOpacity={ NUMERIC.opacityTouchFade }
      onPress={ onPress }
    >
      { allCompleted ?
        <ICONS_SVG.candyGreenSvg
          width={ INDICATOR_SIZE }
          height={ INDICATOR_SIZE }
        /> :
        <ICONS_SVG.candyBlueSvg
          width={ INDICATOR_SIZE }
          height={ INDICATOR_SIZE }
        /> }
      <Text style={ styles.buttonTaskText }>{`${completedTasks}/${totalTasks}`}</Text>
      <Text style={ styles.buttonText }>{ item.buttonText }</Text>
    </TouchableOpacity>
  )
}

/**
 * Checkbox for tasks in competencedetails window
 */
const CompetenceDetailsCheckbox = ( { index, taskName, checked, handleCompleted, status } ) => {

  const [isActive, setIsActive] = useState(true); 
  const [taskStatus, setTaskStatus] = useState(status)
  //status = 'none' //temporary parameter, remove when status is forwarded. should be 'none', 'deactive', 'active' or 'done'
  

  const handleButtonPress = (index) => {
    handleCompleted(index);
  };

  const handleActivate = () => {
    setIsActive(true);

    if(taskStatus == 'active' || status == 'active') {
      setTaskStatus('done');
    }
    else {
      setTaskStatus('active');
    }
  };

  const handleDeactivate = () => {
    setIsActive(false); 
    setTaskStatus('deactive');
  };

  const SubstractButton = () => {
    switch (taskStatus) {
      case 'none':
        return (
        <TouchableOpacity onPress={() => handleDeactivate()}>
          <View style={styles.counterLabelSubstract}><FontAwesome6
              name="minus"
              size={30}
              color='white'
          /></View>
        </TouchableOpacity>
        );
      case 'deactive':
        break;
      case 'active': case 'done':
        return (
          <TouchableOpacity onPress={() => handleDeactivate()}>
            <View style={[styles.counterLabelSubstract, styles.counterLabelSecondary]}><FontAwesome6
                name="minus"
                size={30}
                color={THEME.darkBlue}
            /></View>
          </TouchableOpacity>
        );
      default:
        return (
          <TouchableOpacity>
            <View style={[styles.counterLabelSubstract, styles.counterLabelSecondary]}><FontAwesome6
                name="minus"
                size={30}
                color={THEME.darkBlue}
            /></View>
          </TouchableOpacity>
        );
    }
  }

  const AddButton = () => {
    switch (taskStatus) {
      case 'none':
        return (
        <TouchableOpacity onPress={() => handleActivate()}>
          <View style={styles.counterLabelAdd}><FontAwesome6
              name="plus"
              size={30}
              color="white"
            /></View>
        </TouchableOpacity>
        );
      case 'deactive':
        return (
          <TouchableOpacity onPress={() => handleActivate()}>
            <View style={[styles.counterLabelAdd, styles.counterLabelSecondary]}><FontAwesome6
                name="plus"
                size={30}
                color={THEME.darkBlue}
              /></View>
          </TouchableOpacity>
        );
      case 'active':
        return (
          <TouchableOpacity onPress={() => handleActivate()}>
            <View style={styles.counterLabelAdd}><Ionicons
                name="checkmark-circle"
                size={40}
                color="white"
              /></View>
          </TouchableOpacity>
        );
      case 'done':
        return (
          <TouchableOpacity onPress={() => handleActivate()}>
            <View style={[styles.counterLabelAdd, {color: 'white'}]}><Ionicons
                name="checkmark"
                size={25}
                color='white'
                style={{backgroundColor: THEME.green, borderRadius: 100, padding: 4}}
              /></View>
          </TouchableOpacity>
        );
      default:
        return (
          <TouchableOpacity>
            <View style={[styles.counterLabelAdd, styles.counterLabelSecondary]}><FontAwesome6
                name="plus"
                size={30}
                color={THEME.darkBlue}
              /></View>
          </TouchableOpacity>
        );
    }
  }

  return (
    <View style={[styles.checkTaskContainer, (status == 'deactive' || taskStatus == 'deactive') && styles.inactiveContainer]}>
      <TouchableOpacity
        onPress={() => handleButtonPress(index)}
        style={[styles.checkTaskTextAndButton, (status == 'deactive' || taskStatus == 'deactive') && styles.inactiveContainer]}
        activeOpacity={NUMERIC.opacityTouchFade}
      >
        {/* {checked ? (
          <ICONS_SVG.checkedSvg style={styles.checkTaskImg} width={30} height={30} />
        ) : (
          <ICONS_SVG.uncheckedSvg style={styles.checkTaskImg} width={30} height={30} />
        )} */}
        <Text style={[styles.checkTaskText, (status == 'deactive' || taskStatus == 'deactive') && styles.inactiveText]}>{taskName}</Text>
      </TouchableOpacity>
      <View style={styles.selectButtons}>
          <SubstractButton />
          <AddButton />
      </View>
    </View>
  );
}

/**
 * Detailed description and a checklist with checkable/uncheckable markers.
 */
const CompetenceDetails = ( { item, tasksCompleted, handleTaskStatusChange } ) => {
  const [showDetails, setShowDetails] = useState(false);
  const fadeAnim = new Animated.Value(0);

  const handleCompleted = ( index ) => {
    let newArray = [ ...tasksCompleted ]
    newArray[ index ] = !newArray[ index ]
    handleTaskStatusChange( newArray )
  }

  const toggleDetailsDropdown = () => {
    Animated.timing(fadeAnim, {
      toValue: showDetails ? 0 : 1,
      duration: 150,
      useNativeDriver: false, // Set to true if using native driver
    }).start();
      setShowDetails(!showDetails);
  }

  useLayoutEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: showDetails ? 1 : 0,
      duration: 500, // No duration for immediate update
      useNativeDriver: false,
    }).start();
  }, [showDetails]);

  return (
    <View>
      <View style={styles.accordion}>
        <TouchableOpacity onPress={toggleDetailsDropdown}>
          <View style={styles.accordionContainer}>
          <Text style={styles.accordionTitle}>Lisätietoa osaamisen tavoitteista  </Text>
          <Ionicons name="chevron-down" size={28} color={THEME.gray}/>
          </View>
        </TouchableOpacity>
        {showDetails && (
          <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              flex: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ]}
          >
            <Text style={ styles.detailsDescription }>{ item.description }</Text>
          </Animated.View>
        )}
      </View>
      { item.tasks.map( ( task, index ) => <CompetenceDetailsCheckbox
        key={ index }
        index={ index }
        taskName={ task.title }
        checked={ tasksCompleted[ index ] }
        handleCompleted={ handleCompleted }
        status = { task.status }
      /> ) }
    </View>
  )
}

// Create tasklist corresponding to competence data size
const competenceUserData = COMPETENCE_DATA.map( ( item ) => {
  const tasklistLength = item.tasks.length
  let taskCompletedArray = []
  for ( let index = 0; index < tasklistLength; index++ ) {
    taskCompletedArray.push( false )
  }
  return {
    taskCompleted: taskCompletedArray
  }
} )


/**
 * Returns absolute top/left values to group of elements in circular formation respect to parent element
 * 
 * @param {number} noOfElements Number of elements to draw total (included center element)
 * @param {number} radius Circumference elements distance to center
 * @param {number} startAngle Angle where first element is drawn
 * @param {number} centerX Group center point X
 * @param {number} centerY Group center point Y
 * @param {number} elementSize Diameter of single element
 * @returns Array of objects with x and y for location
 */
const calcElementPositions = (
  noOfElements,
  radius,
  startAngle,
  centerX,
  centerY,
  elementSize
) => {

  // Calculate angle between two radial elements and convert to rad
  const angleSliceRad = 360 / ( noOfElements - 1 ) / ( 180 / Math.PI )

  // Convert start angle to rad
  const startAngleRad = startAngle / ( 180 / Math.PI )

  // First (center) element is in given center location according to elementSize
  const x0 = Math.round( centerX - elementSize / 2 )
  const y0 = Math.round( centerY - elementSize / 2 )
  let elementPositions = [
    {
      left: x0,
      top: y0
    }
  ]

  // Calculate rest of the elements in the radial circle
  for ( let i = 1; i <= noOfElements; i++ ) {
    let newPos = {
      left: Math.round( x0 + radius * Math.cos( startAngleRad + ( i - 1 ) * angleSliceRad ) ),
      top: Math.round( y0 + radius * Math.sin( startAngleRad + ( i - 1 ) * angleSliceRad ) )
    }
    elementPositions.push( newPos )
  }
  return elementPositions
}

/**
 * View for students competence checklist
 */
const CompetenceGoalsView = ({navigation}) => {
  const [ tasksCompleted, setTasksCompleted ] = useState( competenceUserData )
  const [ showDetailsFrom, setShowDetailsFrom ] = useState( null )

  const route = useRoute();

  useEffect(() => {
    (async ()=>{
      // Load task list from async storage
      let dataFromStorage = await getDataFromStorage(COMPETENCE_STORAGE_KEY)

      // If there is no defined datastructure in async storage, we create and save it. Should only be triggered once.
      if (dataFromStorage.length <= 0) {
        dataFromStorage = competenceUserData
        await saveDataToStorage(COMPETENCE_STORAGE_KEY, dataFromStorage)
        setTasksCompleted(dataFromStorage)
      } 
      // If there is datastructure, just put it in the state variable
      else {
        setTasksCompleted(dataFromStorage)
      }
    }  
    )()
  }, [])
  
  useEffect(() => {
    if(route.params?.detailsIndex) {
      setShowDetailsFrom(route.params.detailsIndex - 1); //-1 so that 0 is also handled, received index should always be +1
    }
  }, [route.params?.detailsIndex])
  
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        // Clean up when the screen goes out of focus
        setShowDetailsFrom(null);
      };
    }, [])
  );

  // Calc competence indicator locations
  const elementPositions = calcElementPositions(
    7,
    INDICATOR_SIZE * 1.05,
    270,
    Dimensions.get( 'window' ).width / 2 - SCREEN_PADDING,
    Dimensions.get( 'window' ).height / 2 - INDICATOR_SIZE,
    INDICATOR_SIZE
  )

  // Handle button presses for competence indicators
  const handleButtonPress = ( index ) => {
    setShowDetailsFrom( index )
  }

  // Update completed tasks to state
  const handleTaskStatusChange = ( taskArray ) => {
    let newTasksCompleted = [ ...tasksCompleted ]
    newTasksCompleted[ showDetailsFrom ].taskCompleted = taskArray
    setTasksCompleted( newTasksCompleted )
    saveDataToStorage(COMPETENCE_STORAGE_KEY, newTasksCompleted)
  }

  if(!tasksCompleted) {
    return(
      <View><Text>Loading...</Text></View>
    )
  }

  // Show general view when showDetailsFrom is null
  if ( showDetailsFrom === null ) {
    return (
      <View style={ styles.viewContainer }>
        <View style={{flexDirection: 'row'}}>
          <BackButton
            onPress={ () => navigation.navigate('MainView') }
          />
          <Text 
            style={ [styles.title, {flex: 1, justifyContent: 'center', marginRight: 40, marginLeft: 12}] }
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          >Tuva-koulutuksen tavoitteet</Text>
        </View>
        <View style={ styles.buttonContainer }>
          { COMPETENCE_DATA.map( ( item, index ) => <CompetenceIndicator
            key={ index }
            top={ elementPositions[ index ].top }
            left={ elementPositions[ index ].left }
            item={ item }
            tasks={ tasksCompleted[ index ].taskCompleted }
            onPress={ () => handleButtonPress( index ) } /> ) }
        </View>
      </View>
    )
  }
  // Show details view when details are selected
  else {
    return (
      <>
        <View style={styles.detailsTitle}>
          <BackButton
            onPress={ () => setShowDetailsFrom( null ) }
          />
          <Text style={ [styles.title, {marginLeft: 10, marginBottom: 0, flex: 1}] }
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          >{ COMPETENCE_DATA[showDetailsFrom].detailsTitle }</Text>
        </View>
        <ScrollView style={ styles.scrollView }>
          <View style={ styles.detailsContainer }>
            <CompetenceDetails
              item={ COMPETENCE_DATA[ showDetailsFrom ] }
              tasksCompleted={ tasksCompleted[ showDetailsFrom ].taskCompleted }
              handleTaskStatusChange={ handleTaskStatusChange }
            />
          </View>
        </ScrollView>
      </>
    )
  }
}

/*
    Bold: require("./assets/fonts/FiraSans-Bold.ttf"),
    SemiBold: require("./assets/fonts/FiraSans-SemiBold.ttf"),
    Regular: require("./assets/fonts/FiraSans-Regular.ttf"),
    Light: require("./assets/fonts/FiraSans-Light.ttf"),
*/
const styles = StyleSheet.create( {
  viewContainer: {
    backgroundColor: THEME.lightBackground,
    position: 'relative',
    flexGrow: 1,
    padding: SCREEN_PADDING,
  },
  scrollView: {
    backgroundColor: THEME.lightBackground,
  },
  detailsContainer: {
    flexGrow: 1,
    padding: 10,
    height: '100%'
  },
  title: {
    fontSize: 25,
    fontFamily: 'SemiBold',
    textAlign: 'center',
    marginBottom: 15,
    color: THEME.darkBlue
  },
  buttonContainer: {
    position: 'relative',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  button: {
    position: 'absolute',
    alignItems: 'center',
    fontWeight: 'bold',
    height: INDICATOR_SIZE,
    width: INDICATOR_SIZE,
    justifyContent: 'start',
  },
  buttonImage: {
    width: '100%',
    height: '100%',
  },
  buttonText: {
    fontFamily: 'SemiBold',
    fontSize: INDICATOR_SIZE * 0.1,
    position: 'absolute',
    textAlign: 'center',
    marginTop: INDICATOR_SIZE * 0.25,
  },
  buttonTaskText: {
    fontFamily: 'Regular',
    position: 'absolute',
    textAlign: 'center',
    transform: [
      {translateY: 30}
    ],
    marginTop: INDICATOR_SIZE * 0.3,
    backgroundColor: 'white',
    borderRadius: 100,
    paddingHorizontal: 10
  },
  checkTaskContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2,
    borderColor: THEME.darkBlue,
    flexDirection: 'row',
    height: 'auto',
    minHeight: 50,
    width: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  checkTaskTextAndButton: {
    backgroundColor: 'white',
    borderRadius: 100,
    flexDirection: 'row',
    height: 'auto',
    width: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  checkTaskImg: {
    marginRight: 10,
    marginLeft: 5,
    marginTop: 2
  },
  checkTaskText: {
    fontFamily: 'SemiBold',
    width: '80%',
    marginLeft: 15,
  },
  
  selectButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: -17,
    height: '100%'
  },
  inactiveContainer: {
    backgroundColor: THEME.lightGray,
  },
  inactiveText: {
    textDecorationLine: 'line-through',
  },
  activeText: {
    textDecorationLine: 'none',
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
  customButtonImg: {
    width: '100%',
    height: '100%',
  },
  detailsDescription: {
    fontFamily: 'Regular',
    fontSize:18,
    height: 'auto'
  },
  detailsTitle: {
    margin: 10,
    marginBottom: 0,
    flexDirection: 'row',
    backgroundColor: THEME.lightBackground,
  },
  accordion:{
    color:THEME.blue,
    borderTopWidth:1.5,
    borderTopColor: THEME.darkBlue,
    borderBottomWidth:1.5,
    borderBottomColor: THEME.darkBlue,
  },
  accordionTitle: {
    color:THEME.darkBlue,
    fontFamily:'Bold',
    marginHorizontal:5,
    marginVertical: 4,
    fontSize:16.5
  },
  accordionContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:12,
    alignItems: 'center'
  },
  counterLabelSubstract: {
    flex: 1,
    backgroundColor: THEME.brightRed,
    borderWidth: 4,
    borderColor: THEME.brightRed,
    margin: -2,
    marginRight: 0,
    color: THEME.white,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterLabelAdd: {
    flex: 1,
    backgroundColor: THEME.darkBlue,
    borderWidth: 4,
    borderColor: THEME.darkBlue,
    margin: -2,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    color: THEME.white,
    width: 50,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterLabelSecondary: {
    backgroundColor: 'none',
    borderColor: THEME.darkBlue
  }
} )

export default CompetenceGoalsView