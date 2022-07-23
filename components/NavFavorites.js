import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import {useDispatch} from "react-redux";

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'Mannerheimintie 70, Helsinki, Finland',
        geometry: {location: {lat: 60.1833142, lng: 24.9239847}}
    },
    {
        id: '633',
        icon: 'briefcase',
        location: 'Work',
        destination: 'Mustikkamaankuja 1, Helsinki, Finland',
        geometry: {location: {lat: 60.18082355, lng: 24.995795504796973}},
    },
];

export const NavFavorites = ({setPredefinedPlaces, ...props}) => {
    const dispatch = useDispatch()

    const renderItem = ({item: {location, destination, icon, geometry,}}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setPredefinedPlaces({
                        description: destination,
                        geometry: { location: location }
                    })
                }}
                style={tw`flex-row items-center p-5`}
            >
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type='ionicon'
                    color='white'
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View
                style={[tw`bg-gray-200`, {height: 0.5}]}/>}
        >

        </FlatList>
    );
};

