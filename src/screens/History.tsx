import { useState } from 'react'; 
import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { VStack, SectionList, Heading, Text } from "native-base";

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: '26.05.22',
            data: ['Puxada frontal', 'Remada unilateral']
        },
        {
            title: '27.05.22',
            data: ['Puxada lateral']
        }
    ]);

    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de Exercícios" />

            <SectionList 
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color="gray.200" fontSize="md" mt={10} mb={3}>{section.title}</Heading>
                )}
                px={8}
                contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center'}}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Não há exercícios registrados ainda. {"\n"}
                        Vamos treinar hoje?
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </VStack>
    );
}