import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Slides = ({ data }) => {

    const renderSlides = () => {
        return data.map((slide) => {
            return (
                <View 
                key={slide.text} 
                style={[styles.slideStyle, {backgroundColor: slide.color}]}>
                    <Text style={styles.textStyle}>{slide.text}</Text>
                </View>
            );
        });

    };

    return (
        <ScrollView
        horizontal
        pagingEnabled
        style={styles.scrollStyle}
        >
            {renderSlides()}
        </ScrollView>

    )
};

const styles = StyleSheet.create({
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },  
    textStyle: {
        fontSize: 30,
        color: 'white'
    },
    scrollStyle: {
        flex: 1,
    }
})

export default Slides;