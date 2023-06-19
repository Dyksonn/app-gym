import { useState } from 'react'
import { HStack, VStack, FlatList, Heading, Text } from "native-base";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from '@components/ExerciseCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationRoutesProps } from '@routes/app.routes';

export function Home() {
    const [groupSelected, setGroupSelected] = useState('Costas')
    const [group, setGroup] = useState(['costas', 'Bíceps', 'Tríceps', 'ombro'])
    const [exercises, setExercises] = useState(['1', '2', '3']);

    const navigation = useNavigation<AppNavigationRoutesProps>();

    function handleOpenExercisesDetails(item: string) {
        navigation.navigate("exercise");
    }
    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList 
                data={group}
                keyExtractor={item => item}
                renderItem={({ item }) => <Group 
                    name={item}
                    isActive={groupSelected.toUpperCase() === item.toUpperCase()}
                />}
                showsHorizontalScrollIndicator={false}
                horizontal
                my={10}
                maxH={10}
                minH={10}
                _contentContainerStyle={{ px: 8 }}
            />

            <VStack flex={1} px={8}>
                <HStack justifyContent='space-between' mb={5}>
                    <Heading color="gray.200" fontSize="md">Exercicios</Heading>

                    <Text color="gray.200" fontSize="sm">
                        {exercises.length}
                    </Text>
                </HStack>

                <FlatList 
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ExerciseCard 
                            onPress={() => handleOpenExercisesDetails(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{
                        paddingBottom: 20
                    }}
                />
            </VStack>
        </VStack>
    );
}