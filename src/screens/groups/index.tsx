import { useEffect, useState, useCallback } from 'react'
import { useNavigation } from "@react-navigation/native"
import { Container, TeamList } from "./styles"
import { Alert, FlatList } from "react-native"
import { GroupCard } from "@components/GroupCard"
import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { ListEmpty } from "@components/ListEmpty"
import { Button } from "@components/Button"
import { api } from '@services/api'

type Group = {
    id: string
    name: string
}

export function Groups() {
    const navigation = useNavigation()
    const [groups, setGroups] = useState<Group[]>([])

    useEffect(useCallback(() => {
        handleGroupsList()
    }, []))

    async function handleGroupsList() {
        await api.get('/group/groupsList')
            .then(response => {
                setGroups(response.data)
            }).catch(err => {
                const { data } = err.response
                Alert.alert('Alerta', data.message)
            })
    }

    function handleGroup(id: string) {
        navigation.navigate('players', { id })
    }

    function handleNewGroup() {
        navigation.navigate('new')
    }

    return (
        <Container>
            <Header />

            <Highlight
                title="Turmas"
                subtitle="Jogue com a sua turma"
            />

            <TeamList>
                <FlatList
                    data={groups}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <GroupCard
                            title={item.name}
                            onPress={() => handleGroup(item.id)}
                        />
                    }
                    ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={
                        [
                            { paddingBottom: 100 },
                            groups.length === 0 && { flex: 1 }
                        ]
                    }
                />
            </TeamList>


            <Button
                title="Criar nova turma"
                onPress={handleNewGroup}
            />
        </Container>
    )
}