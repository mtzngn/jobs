import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Button } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const renderLastSlide = (index, data, onComplete) => {
    if (index === data.length - 1) {
        return (
            <Button 
            title='Onwards!'
            raised
            color='red'
            onPress={onComplete}
            />
        );
    }
}

const Slides = ({ data, onComplete }) => {

    const renderSlides = () => {
        return data.map((slide, index) => {
            return (
                <View 
                key={slide.text} 
                style={[styles.slideStyle, {backgroundColor: slide.color}]}>
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    {renderLastSlide(index, data, onComplete)}
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
    },
    btnStyle: {
        marginTop: 1000
    }
})

export default Slides;