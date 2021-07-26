import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  View,
  LayoutAnimation,
  UIManager,
} from "react-native";
import usePrepValue from "../hooks/usePrepValue";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const Swipe = (props) => {
  const prevData = usePrepValue(props.data);
  const { count, onSwipeLeft, onSwipeRight, data } = props;
  const position = useRef(new Animated.ValueXY()).current;
  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: (event, gesture) => true,
        onPanResponderMove: (event, gesture) => {
          position.setValue({ x: gesture.dx, y: gesture.dy });
        },
        onPanResponderRelease: (event, gesture) => {
          if (gesture.dx > SWIPE_THRESHOLD) {
            forceSwipe("right");
          } else if (gesture.dx < -SWIPE_THRESHOLD) {
            forceSwipe("left");
          } else {
            resetPosition();
          }
        },
      }),
    [count]
  );

  // useEffect(
  //   (nextProps) => {
  //     UIManager.setLayoutAnimationEnabledExperimental &&
  //       UIManager.setLayoutAnimationEnabledExperimental(true);
  //     LayoutAnimation.spring();
  //     if (prevData !== props.data) props.resetCounter();
  //   },
  //   [count]
  // );

  const forceSwipe = (direction) => {
    const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = (direction) => {
    const item = data[count];
    direction === "right" ? onSwipeRight(item) : onSwipeLeft(item);
    position.setValue({ x: 0, y: 0 });
    props.actions.increaseCount();
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
    }).start();
  };
  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  const renderCards = () => {
    if (count >= props.data.length) return props.renderNoMoreCards();

    return props.data
      .map((item, i) => {
        if (i < count) return null;
        if (i === count) {
          return (
            <Animated.View
              key={item}
              style={[getCardStyle(), styles.cardStyle]}
              {...panResponder.panHandlers}
              useNativeDriver={true}
            >
              {props.renderCard(item)}
            </Animated.View>
          );
        }
        return (
          <Animated.View
            style={[styles.cardStyle, { top: 10 * (i - count), zIndex: -i }]}
            key={item.id}
            useNativeDriver={true}
          >
            {props.renderCard(item)}
          </Animated.View>
        );
      })
      .reverse();
  };
  return <View>{renderCards()}</View>;
};

const styles = StyleSheet.create({
  cardStyle: {
    position: "absolute",
    width: SCREEN_WIDTH,
  },
});

const mapStateToProps = (state) => {
  return { count: state.counter.count };
};

const mapActionsToProps = (dispatch) => {
  return { actions: bindActionCreators({ ...actions }, dispatch) };
};

export default connect(mapStateToProps, mapActionsToProps)(Swipe);
