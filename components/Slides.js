import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Slides = ({ data }) => {

    const renderSlides = () => {
        return data.map((slide) => {
            return (
                <View key={slide.text} style={styles.slideStyle}>
                    <Text style={styles.slideText}>{slide.text}</Text>
                </View>
            );
        });

    };

    return (
        <ScrollView
        horizontal={true}
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
        alignItems: 'center'
    },  
    slideText: {
        fontSize: 30
    },
    scrollStyle: {
        flex: 1,
        backgroundColor: 'red'
    }
})

export default Slides;