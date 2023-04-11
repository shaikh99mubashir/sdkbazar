import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Color} from '../../Constants';

const CarouselSlider = (props: any) => {
  const {carouselItems, dots} = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCarouselItem = ({item}: {item: any}) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.carouselImage} />
      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={{top: -18}}
        dotStyle={{
          width: 9,
          height: 9,
          borderRadius: 5,
          marginHorizontal: -5,
          marginVertical: 0,
          backgroundColor: Color.red,
          margin: 0,
          padding: 0,
        }}
        inactiveDotStyle={{
          backgroundColor: Color.textColor,
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
        tappableDots={true}
      />
    );
  };
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.91);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
  return (
    <View>
      <Carousel
        data={carouselItems}
        renderItem={renderCarouselItem}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={ITEM_WIDTH}
        layout={'default'}
        loop={true}
        autoplay={true}
        inactiveSlideShift={0}
        onSnapToItem={index => setActiveIndex(index)}
        autoplayInterval={5000}
      />

      {dots ? pagination() : ''}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    width: '99%',
    borderRadius: 20,
    height: 155,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImage: {
    width: '99%',
    height: 155,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  carouselTextContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  carouselTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carouselText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CarouselSlider;
